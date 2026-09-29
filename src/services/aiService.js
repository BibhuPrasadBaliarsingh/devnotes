// Frontend-only NVIDIA NIM AI Service for DevNotes Tutor
// Proxied via Vite (dev) and Netlify (prod) to eliminate browser CORS preflight blocks
const PROXY_API_URL = '/api/nvidia/v1/chat/completions';
const DIRECT_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';
const DEFAULT_API_KEY = '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';
const PRIMARY_MODEL = 'meta/llama-3.2-11b-vision-instruct';

export function getApiKey() {
  return localStorage.getItem('devnotes_custom_api_key') || DEFAULT_API_KEY;
}

export function setCustomApiKey(key) {
  if (key && key.trim()) {
    localStorage.setItem('devnotes_custom_api_key', key.trim());
  } else {
    localStorage.removeItem('devnotes_custom_api_key');
  }
}

export function isUsingCustomKey() {
  return Boolean(localStorage.getItem('devnotes_custom_api_key'));
}

/**
 * Sends a conversation to NVIDIA AI and returns the assistant's reply.
 *
 * @param {Array<{role: string, content: string}>} messages - Prior chat history
 * @param {string} [contextInfo] - Information about current page/topic
 * @returns {Promise<string>}
 */
export async function sendChatMessage(messages, contextInfo = '') {
  const apiKey = getApiKey();

  const systemPrompt = `You are "DevNotes AI Tutor", an intelligent, concise, and encouraging programming mentor for developers and learners on the DevNotes documentation platform.
${contextInfo ? `Current topic/context the user is reading: "${contextInfo}".` : ''}

Your Mission:
1. Explain technical questions, concepts, and answers clearly and simply when the user is confused or doesn't understand something.
2. Provide clean, modern, and minimal code examples where helpful.
3. Format your answers with clear markdown: use bold headers, bullet lists, and code blocks with language specifiers.
4. Keep explanations focused and easy to digest. Avoid overwhelming jargon without explaining it.
5. If the user asks for interview tips, give direct, practical guidance and sample answers.`;

  const payloadMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.slice(-8), // Keep last 8 messages for context
  ];

  const payload = {
    model: PRIMARY_MODEL,
    messages: payloadMessages,
    max_tokens: 1024,
    temperature: 0.6,
    top_p: 0.9,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

  let response;
  try {
    response = await fetch(PROXY_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (response.status === 404) {
      response = await fetch(DIRECT_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });
    }
  } catch (err) {
    try {
      response = await fetch(DIRECT_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });
    } catch {
      throw new Error('Unable to connect to AI service. Please check your network connection.');
    }
  }

  if (!response.ok) {
    let errorDetail = '';
    try {
      const errorJson = await response.json();
      errorDetail = errorJson.detail || errorJson.message || errorJson.title || '';
    } catch {
      errorDetail = response.statusText;
    }

    if (response.status === 401) {
      throw new Error('API key is invalid or unauthorized. Please verify your NVIDIA API key.');
    } else if (response.status === 429) {
      throw new Error('Rate limit reached. Please wait a few moments and try again.');
    } else {
      throw new Error(`AI service error (${response.status}): ${errorDetail || 'Unable to complete request'}`);
    }
  }

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content;

  if (!reply) {
    throw new Error('No response received from AI model.');
  }

  return reply.trim();
}

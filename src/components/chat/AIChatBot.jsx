import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Sparkles,
  X,
  Send,
  Trash2,
  Minimize2,
  Maximize2,
  RefreshCw,
  Key,
  HelpCircle,
  Code2,
  BookOpen,
} from 'lucide-react';
import { sendChatMessage, getApiKey, setCustomApiKey, isUsingCustomKey } from '../../services/aiService';
import ChatMessage from './ChatMessage';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content:
    "Hi! I'm your **DevNotes AI Tutor** 🤖.\n\nIf you don't understand any topic, interview question, code snippet, or explanation on this page, ask me here! I can break it down in plain English with easy examples.",
};

const SUGGESTIONS = [
  'Explain this topic in simple terms',
  'Give me a practical code example',
  'What are common interview questions here?',
  'Explain the difference between SQL and NoSQL',
];

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = sessionStorage.getItem('devnotes_chat_history');
      return saved ? JSON.parse(saved) : [INITIAL_MESSAGE];
    } catch {
      return [INITIAL_MESSAGE];
    }
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [customKey, setCustomKey] = useState('');
  const [hasCustomKey, setHasCustomKey] = useState(isUsingCustomKey());

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const location = useLocation();

  // Save conversation to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem('devnotes_chat_history', JSON.stringify(messages));
    } catch {
      // Ignore sessionStorage issues
    }
  }, [messages]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized, isLoading]);

  // Auto focus input when opening
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Derive human-readable context from current URL
  function getPageContext() {
    const path = location.pathname;
    if (path.startsWith('/notes/')) {
      const slug = path.replace('/notes/', '');
      return `Note Guide: ${slug.replace(/-/g, ' ').toUpperCase()}`;
    }
    if (path.startsWith('/learn/')) {
      const parts = path.split('/').filter(Boolean);
      return `Interactive Course: ${parts.slice(1).join(' / ')}`;
    }
    if (path === '/notes') return 'All Developer Notes';
    if (path === '/learn') return 'All Interactive Courses';
    return 'DevNotes Platform';
  }

  const currentContext = getPageContext();

  async function handleSend(textToSend) {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setError(null);
    setInput('');

    const newMessages = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const reply = await sendChatMessage(newMessages, currentContext);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleClearChat() {
    if (window.confirm('Clear your conversation history?')) {
      setMessages([INITIAL_MESSAGE]);
      setError(null);
      sessionStorage.removeItem('devnotes_chat_history');
    }
  }

  function handleSaveKey(e) {
    e.preventDefault();
    setCustomApiKey(customKey);
    setHasCustomKey(isUsingCustomKey());
    setShowSettings(false);
    setCustomKey('');
  }

  function handleResetDefaultKey() {
    setCustomApiKey('');
    setHasCustomKey(false);
    setShowSettings(false);
    setCustomKey('');
  }

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="group relative flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary px-4 py-3 text-sm font-semibold text-primary-fg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
            aria-label="Open DevNotes AI Tutor"
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
            <span className="hidden sm:inline">Ask AI Tutor</span>
            <span className="inline-block rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              AI
            </span>
          </button>
        </div>
      )}

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 z-50 flex flex-col rounded-2xl border border-border bg-card shadow-2xl transition-all duration-200 sm:bottom-6 sm:right-6 ${
            isMinimized
              ? 'h-14 w-72 sm:w-80 overflow-hidden'
              : 'h-[580px] max-h-[85vh] w-[calc(100vw-2rem)] sm:w-[420px]'
          }`}
        >
          {/* Header */}
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-card/90 px-4 backdrop-blur-md">
            <div
              className="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-fg shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold text-fg sm:text-sm truncate">
                    DevNotes AI Tutor
                  </h3>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-success" title="Online" />
                </div>
                <p className="text-[10px] text-muted truncate">
                  {currentContext}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setShowSettings(!showSettings)}
                className="rounded-lg p-1.5 text-muted hover:bg-hover hover:text-fg transition-colors"
                title="API Settings"
                aria-label="API Settings"
              >
                <Key className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleClearChat}
                className="rounded-lg p-1.5 text-muted hover:bg-hover hover:text-fg transition-colors"
                title="Clear conversation"
                aria-label="Clear chat"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="rounded-lg p-1.5 text-muted hover:bg-hover hover:text-fg transition-colors"
                title={isMinimized ? 'Expand' : 'Minimize'}
                aria-label={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4" />
                ) : (
                  <Minimize2 className="h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-muted hover:bg-hover hover:text-fg transition-colors"
                title="Close"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Optional Settings Panel */}
              {showSettings && (
                <div className="border-b border-border bg-hover/40 p-3 text-xs">
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-fg">API Configuration</span>
                    <button
                      type="button"
                      onClick={() => setShowSettings(false)}
                      className="text-muted hover:text-fg"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-muted mb-2">
                    Running directly in your browser with NVIDIA NIM AI.
                  </p>
                  <form onSubmit={handleSaveKey} className="space-y-2">
                    <input
                      type="password"
                      placeholder="Custom NVIDIA API key (optional)"
                      value={customKey}
                      onChange={(e) => setCustomKey(e.target.value)}
                      className="w-full rounded-md border border-border bg-card px-2.5 py-1.5 text-xs text-fg outline-none focus:border-primary"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-fg hover:opacity-90"
                      >
                        Save Key
                      </button>
                      {hasCustomKey && (
                        <button
                          type="button"
                          onClick={handleResetDefaultKey}
                          className="rounded-md border border-border px-2 py-1 text-xs text-muted hover:text-fg"
                        >
                          Use Default Key
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              )}

              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((msg, index) => (
                  <ChatMessage key={index} message={msg} />
                ))}

                {isLoading && (
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-fg text-xs shadow-sm">
                      <Sparkles className="h-4 w-4 animate-spin" />
                    </div>
                    <div className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: '0.15s' }}
                        />
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: '0.3s' }}
                        />
                        <span className="ml-2 text-xs text-muted">DevNotes AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-danger/40 bg-danger/10 p-3 text-xs text-danger flex items-start justify-between gap-2">
                    <p>{error}</p>
                    <button
                      type="button"
                      onClick={() => handleSend(messages[messages.length - 1]?.content)}
                      className="inline-flex shrink-0 items-center gap-1 rounded bg-danger px-2 py-1 text-[11px] font-semibold text-white hover:opacity-90"
                    >
                      <RefreshCw className="h-3 w-3" />
                      <span>Retry</span>
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              {messages.length <= 2 && !isLoading && (
                <div className="border-t border-border/40 bg-card/60 px-3 py-2">
                  <div className="flex items-center gap-1 text-[10px] font-medium text-muted mb-1.5">
                    <HelpCircle className="h-3 w-3 text-primary" />
                    <span>Suggestions for this topic:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTIONS.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSend(item)}
                        className="rounded-md border border-border/80 bg-bg px-2 py-1 text-[11px] text-muted hover:border-primary/50 hover:text-primary transition-colors text-left truncate max-w-full"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Box */}
              <div className="border-t border-border bg-card p-3">
                <div className="flex items-center gap-2 rounded-xl border border-border bg-bg p-1.5 focus-within:border-primary transition-colors">
                  <textarea
                    ref={inputRef}
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything (e.g. explain CORS, closures, or code)..."
                    className="flex-1 resize-none bg-transparent px-2.5 py-1 text-xs text-fg outline-none placeholder:text-muted sm:text-sm max-h-24"
                  />
                  <button
                    type="button"
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isLoading}
                    aria-label="Send message"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-fg shadow-sm transition-opacity hover:opacity-90 disabled:opacity-40"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted px-1">
                  <span>Press Enter to send · Shift+Enter for newline</span>
                  <span className="hidden sm:inline">Frontend-only AI</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

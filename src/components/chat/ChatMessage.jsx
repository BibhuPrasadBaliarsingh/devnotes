import { useState } from 'react';
import { Bot, User, Copy, Check } from 'lucide-react';
import CodeBlock from '../notes/CodeBlock';

function FormattedContent({ text }) {
  // Split content by code blocks ```...```
  const parts = text.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2 text-xs leading-relaxed sm:text-sm">
      {parts.map((part, idx) => {
        if (part.startsWith('```')) {
          // Extract language and code
          const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
          const language = match?.[1] || 'text';
          const code = match?.[2] ? match[2].trim() : part.slice(3, -3).trim();
          return (
            <CodeBlock
              key={idx}
              code={code}
              language={language}
              title={language.toUpperCase() || 'CODE'}
            />
          );
        }

        // Render standard text with paragraphs, bullet points, and inline code
        const paragraphs = part.split(/\n\n+/);
        return (
          <div key={idx} className="space-y-2">
            {paragraphs.map((p, pIdx) => {
              const lines = p.split('\n');
              return (
                <div key={pIdx} className="space-y-1">
                  {lines.map((line, lIdx) => {
                    const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
                    const content = isBullet ? line.trim().slice(2) : line;

                    return (
                      <div
                        key={lIdx}
                        className={isBullet ? 'flex items-start gap-2 pl-2' : ''}
                      >
                        {isBullet && (
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        )}
                        <span>{renderInlineFormatting(content)}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function renderInlineFormatting(text) {
  // Parse inline code `code` and bold **bold**
  const tokens = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return tokens.map((token, i) => {
    if (token.startsWith('`') && token.endsWith('`')) {
      return (
        <code
          key={i}
          className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-[11px] text-primary sm:text-xs"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-fg">
          {token.slice(2, -2)}
        </strong>
      );
    }
    return token;
  });
}

export default function ChatMessage({ message }) {
  const isBot = message.role === 'assistant';
  const [copied, setCopied] = useState(false);

  async function handleCopyAll() {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Ignore clipboard error
    }
  }

  return (
    <div
      className={`group flex items-start gap-2.5 transition-all ${
        isBot ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs ${
          isBot
            ? 'bg-primary text-primary-fg shadow-sm'
            : 'bg-muted/30 text-fg'
        }`}
      >
        {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
      </div>

      <div
        className={`relative max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
          isBot
            ? 'border border-border bg-card text-fg'
            : 'bg-primary text-primary-fg font-medium'
        }`}
      >
        {isBot ? (
          <>
            <FormattedContent text={message.content} />
            <div className="mt-2 flex items-center justify-between border-t border-border/50 pt-1.5 text-[10px] text-muted">
              <span>DevNotes AI Tutor</span>
              <button
                type="button"
                onClick={handleCopyAll}
                className="flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-hover hover:text-fg transition-colors"
                title="Copy entire response"
              >
                {copied ? <Check className="h-3 w-3 text-success" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </>
        ) : (
          <p className="whitespace-pre-wrap text-xs sm:text-sm leading-relaxed">
            {message.content}
          </p>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CodeBlock({ code, language = 'text', title }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  }

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between bg-hover px-4 py-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">
          {title || language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="flex items-center gap-1 rounded px-2 py-1 text-xs text-muted transition-colors hover:bg-card hover:text-fg"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto bg-code-bg px-4 py-3 text-sm leading-relaxed text-code-fg">
        <code className={`font-mono language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

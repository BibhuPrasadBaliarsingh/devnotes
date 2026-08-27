import { CheckCircle2 } from 'lucide-react';
import CodeBlock from './CodeBlock';
import Callout from './Callout';
import ComparisonTable from './ComparisonTable';

/**
 * Data-driven note renderer. Each topic's `content` array is a list of blocks
 * like { type: 'paragraph', text } or { type: 'code', language, code }.
 * Add a new block type here once, and every course/topic can use it.
 */
export default function NoteContent({ blocks = [] }) {
  return (
    <div className="max-w-none">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2
          id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          className="mb-3 mt-8 scroll-mt-20 text-xl font-semibold text-fg first:mt-0"
        >
          {block.text}
        </h2>
      );

    case 'paragraph':
      return <p className="mb-4 leading-relaxed text-fg/90">{block.text}</p>;

    case 'list':
      return block.ordered ? (
        <ol className="mb-4 ml-5 list-decimal space-y-1.5 leading-relaxed text-fg/90">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className="mb-4 ml-5 list-disc space-y-1.5 leading-relaxed text-fg/90">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case 'code':
      return <CodeBlock code={block.code} language={block.language} title={block.title} />;

    case 'table':
      return <ComparisonTable headers={block.headers} rows={block.rows} />;

    case 'callout':
      return <Callout variant={block.variant} title={block.title} text={block.text} />;

    case 'keypoints':
      return (
        <div className="my-4 rounded-lg border border-success/30 bg-success/5 px-4 py-3">
          <p className="mb-2 text-sm font-semibold text-fg">Key takeaways</p>
          <ul className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-fg/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

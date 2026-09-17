import CodeBlock from './CodeBlock';
import Callout from './Callout';
import Accordion from './Accordion';

export default function NoteRenderer({ sections }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <div className="mb-4 border-b border-border/60 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
              {section.title}
            </h2>
            {section.summary && (
              <p className="mt-1 text-sm text-muted">{section.summary}</p>
            )}
          </div>

          <div className="space-y-4">
            {(section.content || section.blocks || []).map((block, idx) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={idx} className="text-sm leading-relaxed text-fg/90 sm:text-base">
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'heading') {
                return (
                  <h3 key={idx} className="mt-6 text-lg font-semibold text-fg sm:text-xl">
                    {block.text}
                  </h3>
                );
              }

              if (block.type === 'subheading') {
                return (
                  <h4 key={idx} className="mt-4 text-base font-semibold text-fg">
                    {block.text}
                  </h4>
                );
              }

              if (block.type === 'code') {
                return (
                  <CodeBlock
                    key={idx}
                    code={block.code}
                    language={block.language || 'javascript'}
                    title={block.title}
                  />
                );
              }

              if (block.type === 'list') {
                const ListTag = block.ordered ? 'ol' : 'ul';
                return (
                  <ListTag
                    key={idx}
                    className={`my-3 space-y-1.5 pl-5 text-sm leading-relaxed text-fg/90 sm:text-base ${
                      block.ordered ? 'list-decimal' : 'list-disc'
                    }`}
                  >
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ListTag>
                );
              }

              if (block.type === 'callout') {
                return (
                  <Callout
                    key={idx}
                    variant={block.variant || 'note'}
                    title={block.title}
                    text={block.text}
                  />
                );
              }

              if (block.type === 'table') {
                return (
                  <div key={idx} className="my-5 overflow-x-auto rounded-lg border border-border">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-hover/80 text-fg border-b border-border">
                        <tr>
                          {block.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-2.5 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60">
                        {block.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-hover/30 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-2.5 text-muted">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              if (block.type === 'faq') {
                return <Accordion key={idx} items={block.items} />;
              }

              return null;
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

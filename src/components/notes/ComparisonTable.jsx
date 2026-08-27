export default function ComparisonTable({ headers = [], rows = [] }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr className="bg-hover">
            {headers.map((header, i) => (
              <th key={i} className="border-b border-border px-4 py-2.5 text-left font-semibold text-fg">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-b-0 odd:bg-transparent even:bg-hover/40">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 align-top text-fg/90">
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

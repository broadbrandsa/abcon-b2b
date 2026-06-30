import { Reveal } from "@/components/sections/reveal";
import { compColumns, compRows } from "@/content/commercial";
import { cn } from "@/lib/utils";

export function Competitive() {
  return (
    <section id="compare">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Why Sandton Gate</span>
          <h2>Best-in-class where it counts.</h2>
          <p>
            How Sandton Gate compares to the obvious alternatives — strongest on accountability, transport and the
            relationship Nedbank already has.
          </p>
        </Reveal>

        <Reveal className="compare">
          <div className="compare-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="cmp-criterion" scope="col">
                    <span className="sr-only">Criterion</span>
                  </th>
                  {compColumns.map((col, i) => (
                    <th key={col} scope="col" className={cn(i === 0 && "cmp-best-col")}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compRows.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row" className="cmp-criterion">
                      {row.criterion}
                    </th>
                    {row.values.map((val, i) => (
                      <td key={i} className={cn(i === 0 && "cmp-best-col", row.best.includes(i) && "cmp-best")}>
                        {row.best.includes(i) && (
                          <svg className="cmp-check" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { InlineMath, BlockMath } from 'react-katex';

export function DefinitionInfiniteSeries() {
  const formula = String.raw`
    \sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \dots
  `;

  return (
    <div>
      <h2>DEFINITION: Infinite Series</h2>

      An <b>infinite series</b> is an expression of the form
      <BlockMath math={formula} />.

      For each positive integer <i>k</i>, the sum
      <BlockMath math={} />
      is called the <i>k</i>th <b>partial sum</b> of the infinite series.

      The partial sums form a sequence {`{`}<BlockMath math={} />{`}`}.

      If the sequence of partial sums converges to a real number S, the infinite series converges.
      
      If we can describe the convergence of a series to S, S is the sum of the series, and we write
      <BlockMath math={} />.

      If the sequence of partial sums diverges, the series diverges.
      {/*<p>where Δx = (b − a) / n and x<sub>i</sub><sup>*</sup> is val.</p>*/}
    </div>
  );
}

// \int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x

import { InlineMath, BlockMath } from 'react-katex';
//import "katex/dist/katex.min.css";

export function IntegralDefinition() {
  const formula = String.raw`\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x`;

  return (
    <div>
      <h2>Definite Integral Definition</h2>
      <BlockMath math={formula} />
      <p>where Δx = (b − a) / n and x<sub>i</sub><sup>*</sup> is a sample point in each subinterval.</p>
    </div>
  );
}

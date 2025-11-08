import { InlineMath, BlockMath } from 'react-katex';
//import "katex/dist/katex.min.css";

// TO DO: make definitions.tsx, theorems.tsx, etc.

export function DefinitionDefiniteIntegral() {
  const formula = String.raw`\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x`;

  return (
    <div>
      <h2>DEFINITION: Definite Integral</h2>
      <BlockMath math={formula} />
      <p>where Δx = (b − a) / n and x<sub>i</sub><sup>*</sup> is a sample point in each subinterval.</p>
    </div>
  );
}

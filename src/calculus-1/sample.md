# My Math Notes

<!-- Inline:  -->
$\int_0^1 x^2 \, dx = \frac{1}{3}$

<!-- Block: -->
$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

#### Important Limits

$\lim_{x \to a} c = c$

$\lim_{x \to 0} \frac{sin(x)}{x} = \lim_{x \to 0} \frac{x}{sin(x)} = 1$

$\lim_{x \to 0} sin(\frac{1}{x}) = DNE$

$\lim_{x \to 0} \frac{cos(x) - 1}{x} = (L'Hopital) \lim_{x \to 0} -sin(x) = \lim_{x \to 0} 1 - cos(x) = 0$

$\lim_{x \to \infty} (1 + \frac{1}{x})^x = e \approx 2.718$

$\lim_{x \to 0^{-}} \frac{1}{x} = -\infty$

$\lim_{x \to 0^{+}} \frac{1}{x} = \infty$

$\lim_{x \to \infty} \frac{1}{x} = 0$

$\lim_{x \to -\infty} \frac{1}{x} = 0$

#### Important Derivatives

$\frac{d}{dx} c = 0$

$\frac{d}{dx} x = 1$

$\frac{d}{dx} e^x = e^x$

$\frac{d}{dx} a^x = a^x \ell n(a)$

$\frac{d}{dx} \ell n(x) = \frac{1}{x}$

$\frac{d}{dx} log_a(x) = \frac{1}{x \ell n(a)}$

$\frac{d}{dx} sin(x) = cos(x)$

$\frac{d}{dx} cos(x) = -sin(x)$

$\frac{d}{dx} tan(x) = sec^2(x)$

$\frac{d}{dx} cot(x) = -csc^2(x)$

$\frac{d}{dx} sec(x) = sec(x)tan(x)$

$\frac{d}{dx} csc(x) = -csc(x)cot(x)$

#### Derivatives Rules

###### Power Rule:

$\frac{d}{dx} x^n = nx^{n-1}$

Example: $\frac{d}{dx} 3x^3 = 9x^2$

Example: $\frac{d}{dx} \frac{1}{x} = \frac{d}{dx} x^{-1} = (-1)x^{-2} = - \frac{1}{x^2}$

###### Product Rule:
$\frac{d}{dx} [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$

###### Quotient Rule:
$\frac{d}{dx} [\frac{f(x)}{g(x)}] = \frac{
    f'(x)g(x) - f(x)g'(x)
}{
    (g(x))^2
}$

###### Chain Rule:
$\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$

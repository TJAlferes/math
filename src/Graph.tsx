import React from 'react';

interface GraphProps {
  width?: number;
  height?: number;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  f: (x: number) => number;  // Function to plot
  interval?: [number, number];  // Interval to draw the curve
}

const Graph: React.FC<GraphProps> = ({
  width = 400,
  height = 300,
  xMin = -Math.PI,
  xMax = Math.PI,
  yMin = -1.5,
  yMax = 1.5,
  f,
  interval,
}) => {
  // Map Cartesian coords to SVG coords
  const mapX = (x: number) =>
    ((x - xMin) / (xMax - xMin)) * width;
  const mapY = (y: number) =>
    height - ((y - yMin) / (yMax - yMin)) * height;

  // Generate axes
  const xAxisY = mapY(0);
  const yAxisX = mapX(0);

  // Generate ticks (simple example)
  const xTicks = [];
  const xStep = (xMax - xMin) / 8;
  for (let x = xMin; x <= xMax; x += xStep) xTicks.push(x);

  const yTicks = [];
  const yStep = (yMax - yMin) / 6;
  for (let y = yMin; y <= yMax; y += yStep) yTicks.push(y);

  // Generate curve path
  const points: [number, number][] = [];
  const [startX, endX] = interval || [xMin, xMax];
  const samples = 200; // Number of points
  for (let i = 0; i <= samples; i++) {
    const x = startX + ((endX - startX) * i) / samples;
    const y = f(x);
    points.push([mapX(x), mapY(y)]);
  }
  const pathData =
    "M " + points.map(([x, y]) => `${x} ${y}`).join(" L ");

  return (
    <svg width={width} height={height} style={{ border: "1px solid black" }}>
      <line x1={0} y1={xAxisY} x2={width} y2={xAxisY} stroke="black" />
      <line x1={yAxisX} y1={0} x2={yAxisX} y2={height} stroke="black" />

      {xTicks.map((xVal, idx) => {
        const x = mapX(xVal);
        return (
          <g key={idx}>
            <line x1={x} y1={xAxisY - 5} x2={x} y2={xAxisY + 5} stroke="black" />
            <text x={x} y={xAxisY + 20} fontSize={10} textAnchor="middle">
              {xVal.toFixed(2)}
            </text>
          </g>
        );
      })}

      {yTicks.map((yVal, idx) => {
        const y = mapY(yVal);
        return (
          <g key={idx}>
            <line x1={yAxisX - 5} y1={y} x2={yAxisX + 5} y2={y} stroke="black" />
            <text x={yAxisX - 10} y={y + 3} fontSize={10} textAnchor="end">
              {yVal.toFixed(2)}
            </text>
          </g>
        );
      })}

      <path d={pathData} stroke="red" fill="none" strokeWidth={2} />
    </svg>
  );
};

export default Graph;

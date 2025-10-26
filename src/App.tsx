//import React from 'react';
import Graph from './Graph';
import './App.css';

function App() {
  return (
    <>
      <Graph
        width={500}
        height={300}
        f={(x) => Math.sin(x)}
        interval={[0, Math.PI]} // Draw sin(x) only over 0..π
        xMin={0}
        xMax={Math.PI}
        yMin={-0.1}
        yMax={1.1}
      />
    </>
  )
}

export default App;

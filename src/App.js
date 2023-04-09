import { createRoot } from 'react-dom/client'
import { Suspense, useState } from 'react'
import './App.css';

import Overlay from './layout/Overlay'
import { FadeIn, LeftMiddle, BottomLeft } from './layout/styles'

import Bananas from './Bananas'

function App() {
  const [speed, set] = useState(1)
  return (
    <>
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <BottomLeft>
        <input type="range" min="0" max="20" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </BottomLeft>
    </>
  );
}

export default App;

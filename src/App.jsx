import { useState, Suspense } from 'react'
import Spline from '@splinetool/react-spline'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline className='scene' scene="https://prod.spline.design/L1FYDOk1w30snGxu/scene.splinecode" />
      </Suspense>
    </div>
  )
}

export default App

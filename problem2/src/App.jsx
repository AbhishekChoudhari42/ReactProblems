import { useEffect, useRef, useState } from 'react'
import './App.css'
import Buttons from './buttons'
import Board from './board'

function App() {

  const [collision, setCollision] = useState(false)
  const [direction, setDirection] = useState(null)  
  const targetRef = useRef(null)
  const boardRef = useRef(null)

  return (
    <div className='main'>
      {collision && <div className="collision">Collision!</div>}
      <Board setCollision={setCollision} direction={direction} boardRef={boardRef} targetRef={targetRef} />
      <div className="btn-area">
        <Buttons direction={direction} setDirection={setDirection} />
      </div>
    </div>

  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './buttons'
import Board from './board'
import { getNextPosition, isCollision, randomPosition } from './utils'

function App() {

  const [collision, setCollision] = useState(false)
  const targetRef = useRef(null)
  const boardRef = useRef(null) 
  const [circle, setCircle] = useState({ x: randomPosition(0,500,25), y: randomPosition(0,500,25) })


  const [currentBtn, setCurrentBtn] = useState(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if(isCollision(circle,25,{x: targetRef.current.offsetLeft,y: targetRef.current.offsetTop},150)){
        console.log("collided")
        setCollision(true)
      }else{
        setCollision(false)
      } 

      if(currentBtn){
        const nextPosition = getNextPosition(circle,currentBtn)

        setCircle(nextPosition)
      }
      
    }, 1000)

    return () => clearInterval(intervalRef.current)
  })

  return (
    <div className='main'>
      {collision && <div className="collision">Collision!</div>}
      
      <Board  currentBtn={currentBtn} boardRef={boardRef} targetRef={targetRef} circle={circle} />
      <div className="btn-area">
        <Buttons currentBtn={currentBtn} setCurrentBtn={setCurrentBtn} />
      </div>
    </div>

  )
}

export default App

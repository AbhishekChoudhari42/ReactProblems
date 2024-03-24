import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { getNextPosition, isCollision, randomPosition } from './utils'

const Board = ({targetRef,boardRef,direction,setCollision}) => {

  const intervalRef = useRef(null)
  const [circle, setCircle] = useState({x:0,y:0})
  
  useEffect(()=>{
    
    setCircle({ 
      x: randomPosition(boardRef.current.offsetTop,boardRef.current.offsetHeight,25),
      y: randomPosition(boardRef.current.offsetLeft,boardRef.current?.offsetWidth,25) 
    })

    targetRef.current.style.top = randomPosition(boardRef.current.offsetTop,boardRef.current.offsetHeight,150)+'px'
    targetRef.current.style.left = randomPosition(boardRef.current.offsetLeft,boardRef.current.offsetWidth,150)+'px'

    

  },[])


  useEffect(()=>{
    console.log(direction)  
    
    const moveCircle = () => {  
    
      let collision = isCollision({ ...circle, size: 25 }, { x: targetRef.current.offsetLeft, y: targetRef.current.offsetTop, size: 150 })
      setCollision(collision)

      if(direction) {
        const nextPosition = getNextPosition(circle, direction,boardRef)
        setCircle(nextPosition)
      }
    }
    
    intervalRef.current = setTimeout(() => {
      moveCircle()
    }, 10)
  
    return () => clearInterval(intervalRef.current)

  },[direction,circle])

  return (
    <div ref={boardRef} className='board'>
      
        <div ref={targetRef} className="target-box">
          {JSON.stringify(circle)}
          {direction}
        </div>
        <div style={{top:circle?.y+'px',left:circle?.x+'px'}} className="circle">
        </div>
    </div>
  )
}

export default Board
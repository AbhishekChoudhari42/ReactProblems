import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { randomPosition } from './utils'

const Board = ({circle,targetRef,boardRef}) => {

  
  useEffect(()=>{

    targetRef.current.style.top = randomPosition(0,boardRef.current.offsetHeight,150)+'px'
    targetRef.current.style.left = randomPosition(0,boardRef.current.offsetWidth,150)+'px'
  
  },[])

  const [target,setTarget] = useState({x:randomPosition(),y:randomPosition()})
  
  return (
    <div ref={boardRef} className='board'>
        <div ref={targetRef} className="target-box">
          {JSON.stringify(circle)}
        </div>
        <div style={{top:circle?.y+'px',left:circle?.x+'px'}} className="circle">

        </div>
    </div>
  )
}

export default Board
import React, { useEffect, useState } from 'react'

const Buttons = ({direction,setDirection}) => {

  const UP = 'ArrowUp', DOWN = 'ArrowDown', LEFT = 'ArrowLeft', RIGHT = 'ArrowRight'

  const handleMouseDown = (e) => {
    setDirection(e.target.name)
  }

  useEffect(() => {

      const handleKeyDown = (e) => {
        if(direction == null){
          setDirection(e.key)
        }        
      }
      
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup',() => setDirection(null))


      return ()=> {  
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup',() => setDirection(null))
      }
  }, [])

  return (
    <div className='btn-container'>
      <div className="btn-row">
        <button name={UP} onMouseUp={()=>setDirection(null)} onMouseDown={handleMouseDown} className={`${direction == UP ? 'active' : ''}`}>⬆</button>
      </div>
      <div className="btn-row">
        <button name={LEFT} onMouseUp={()=>setDirection(null)} onMouseDown={handleMouseDown} className={`${direction == LEFT ? 'active' : ''}`}>⬅</button>
        <button name={RIGHT} onMouseUp={()=>setDirection(null)} onMouseDown={handleMouseDown} className={`${direction == RIGHT ? 'active' : ''}`}>➡</button>
      </div>
      <div className="btn-row">
        <button name={DOWN} onMouseUp={()=>setDirection(null)} onMouseDown={handleMouseDown} className={`${direction == DOWN ? 'active' : ''}`}>⬇</button>
      </div>
    </div>
  )
}

export default Buttons
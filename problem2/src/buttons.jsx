import React, { useEffect, useState } from 'react'

const Buttons = ({currentBtn,setCurrentBtn}) => {

  const UP = 'UP', DOWN = 'DOWN', LEFT = 'LEFT', RIGHT = 'RIGHT'


  const handleMouseDown = (e) => {
    setCurrentBtn(e.target.name)
  }

  useEffect(() => {

      const handleKeyDown = (e) => {
        console.log("aaa")
        if(currentBtn == null){
          
          switch (e.key){
            case 'ArrowUp':
              setCurrentBtn(UP);
              break;
            case 'ArrowDown':
              setCurrentBtn(DOWN);
              break;
            case 'ArrowLeft':
              setCurrentBtn(LEFT);
              break;
            case 'ArrowRight':
              setCurrentBtn(RIGHT);
              break;
          }

        }        
      }
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup',() => setCurrentBtn(null))


      return ()=> {  
        window.removeEventListener('keyup',() => setCurrentBtn(null))
        window.removeEventListener('keydown', handleKeyDown)
      }
  }, [])

  return (
    <div className='btn-container'>
      <div className="btn-row">
        <button name={UP} onMouseUp={()=>setCurrentBtn(null)} onMouseDown={handleMouseDown} className={`${currentBtn == UP ? 'active' : ''}`}>⬆</button>
      </div>
      <div className="btn-row">
        <button name={LEFT} onMouseUp={()=>setCurrentBtn(null)} onMouseDown={handleMouseDown} className={`${currentBtn == LEFT ? 'active' : ''}`}>⬅</button>
        <button name={RIGHT} onMouseUp={()=>setCurrentBtn(null)} onMouseDown={handleMouseDown} className={`${currentBtn == RIGHT ? 'active' : ''}`}>➡</button>
      </div>
      <div className="btn-row">
        <button name={DOWN} onMouseUp={()=>setCurrentBtn(null)} onMouseDown={handleMouseDown} className={`${currentBtn == DOWN ? 'active' : ''}`}>⬇</button>
      </div>
    </div>
  )
}

export default Buttons
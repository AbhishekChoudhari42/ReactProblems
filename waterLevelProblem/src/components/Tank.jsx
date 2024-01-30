import React, { useRef } from 'react'
import { emptyTank, fill } from '../Watertank';
import { TIME } from '../constants';
const Tank = ({level,index,setWaterTanks,waterTanks}) => {
    
  let interval = useRef(null);
  
  const fillTank = (index) => {
    interval.current = setInterval(()=>{
        setWaterTanks((waterTanks)=>fill(waterTanks,index))
    },1000)
  }
  const stopFillTank = () => {
    clearInterval(interval.current)
  }

  const empty = (index) => {
    setWaterTanks((waterTanks) => emptyTank(waterTanks,index))
  }

  return (
    <div className='tank-container'>
        <div className='btns'>
            <button onClick={()=>empty(index)}>empty</button>
            <button onMouseDown={()=>{fillTank(index)}} onMouseUp={()=>stopFillTank()}>fill</button>
        </div>
        <div className="tank">
            <div style={{height:`${level/5}px`}} className="water"></div>
        </div>
        <div className="info">
            <p>level : {Math.round(waterTanks[index].level)}</p>
            <p>queue : {Math.round(waterTanks[index].queue)}</p>
        </div>
    </div>
  )
}

export default Tank
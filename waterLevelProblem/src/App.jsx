import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WaterTank, { levelOutWater } from './Watertank'
import Tank from './components/Tank'
import { TIME } from './constants'

function App() {
  const numberOfTanks = 4
  const waterTanksArray = new Array(numberOfTanks).fill(0).map((e)=>(new WaterTank(0)))
  const [waterTanks, setWaterTanks] = useState(waterTanksArray)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      setWaterTanks((waterTanks)=>levelOutWater(waterTanks))
    },1000)

    return () => clearInterval(interval)
  })

  return (
      <div className='App'>
          {
            waterTanks.map((tank,i)=>{
              return <Tank waterTanks={waterTanks} level={tank.level} index={i} setWaterTanks={setWaterTanks} key={i}/>
            })
          }
      </div>

  )
}

export default App

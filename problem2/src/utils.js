export const randomPosition = (start,end,elementWidth) =>{
    end = end - elementWidth
    return Math.floor(Math.random()*(end-start)) + start
}

const CIRCLE_STEP = 10

export const getNextPosition = (currentPos,direction,boardRef) => {
    let xMax = boardRef.current?.offsetWidth 
    let yMax = boardRef.current?.offsetHeight
    let newPos
    switch (direction){
        case 'ArrowUp':
          newPos = { ...currentPos, y: currentPos.y - CIRCLE_STEP }
          break;
        case 'ArrowDown':
          newPos = { ...currentPos, y: currentPos.y + CIRCLE_STEP }
          break;
        case 'ArrowLeft':
          newPos = { ...currentPos, x: currentPos.x - CIRCLE_STEP }
          break;
        case 'ArrowRight':
          newPos = { ...currentPos, x: currentPos.x + CIRCLE_STEP }
          break;
        
      }

    if((newPos?.x >= 0 && (newPos?.x + 25) <= xMax && newPos?.y >= 0 && (newPos?.y + 25) <= yMax)){
        return newPos
    }else{
        return currentPos
    }
    
}

export const isCollision = (objectA,objectB) =>{

    if( objectA.x < objectB.x + objectB.size && 
        objectA.x + objectA.size > objectB.x &&
        objectA.y < objectB.y + objectB.size && 
        objectA.y + objectA.size > objectB.y
    ){
        return true
    }else{
        return false
    }
}
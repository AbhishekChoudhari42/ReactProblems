export const randomPosition = (start,end,elementWidth) =>{
    start = start + elementWidth
    end = end - elementWidth
    return Math.floor(Math.random()*(end-start)) + start
}
const CIRCLE_STEP = 10
export const getNextPosition = (currentPos,direction) => {
    
    switch (direction){
        case 'UP':
          return { ...currentPos, y: currentPos.y - CIRCLE_STEP }
        case 'DOWN':
          return { ...currentPos, y: currentPos.y + CIRCLE_STEP }
        case 'LEFT':
          return { ...currentPos, x: currentPos.x - CIRCLE_STEP }
        case 'RIGHT':
          return { ...currentPos, x: currentPos.x + CIRCLE_STEP }
        
      }
}

export const isCollision = (objectA,objectA_size,objectB,objectB_size) =>{

    if( objectA.x < objectB.x + objectB_size && 
        objectA.x + objectA_size > objectB.x &&
        objectA.y < objectB.y + objectB_size && 
        objectA.y + objectA_size > objectB.y
    ){
        return true
    }else{
        return false
    }
}
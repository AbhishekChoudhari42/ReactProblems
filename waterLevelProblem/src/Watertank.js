import { MAX_FLOW,TANK_CAPACITY,TANK_FILL_BTN_CAPACITY } from "./constants";

export default class WaterTank {
    constructor(level) {
        this.level = 0;
        this.queue = 0;
    }
    levelOut(upFlow, downFlow, avg) {

        if (this.level > avg) {
            let balance = (this.level - avg)
            this.level -= (downFlow > balance ? balance : downFlow)
        }
        if (this.level < avg) {
            let balance = (avg - this.level)
            this.level += (upFlow > balance ? balance : upFlow)
        }

        if (this.level < TANK_CAPACITY) {
            let balance = (TANK_CAPACITY - this.level)
            let currFillAmt
            if (this.queue > balance) {
                currFillAmt = balance > MAX_FLOW ? MAX_FLOW : balance
            } else {
                currFillAmt = this.queue > MAX_FLOW ? MAX_FLOW : this.queue
            }
            this.level += currFillAmt;
            this.queue -= currFillAmt;
        }
    }
}

const flowRate = (waterTanks, avg) => {

    let upsum = 0;
    let downsum = 0;

    let downwardCount = 0;
    let upwardCount = 0;

    for (let i = 0; i < waterTanks.length; i++) {

        if (waterTanks[i].level > avg) {
            downsum += (waterTanks[i].level - avg) > MAX_FLOW ? MAX_FLOW : (waterTanks[i].level - avg)
            downwardCount++
        }
        if (waterTanks[i].level < avg) {
            upsum += (avg - waterTanks[i].level) > MAX_FLOW ? MAX_FLOW : (avg - waterTanks[i].level)
            upwardCount++
        }
    }

    let flow = Math.min(upsum, downsum)

    const upFlow = flow / upwardCount
    const downFlow = flow / downwardCount

    return { upFlow, downFlow }
}


export const levelOutWater = (waterTanks) => {

    const sum = waterTanks.reduce((prev, curr) => (prev + curr.level), 0)
    const avg = sum == 0 ? 0 : sum / waterTanks.length

    const { upFlow, downFlow } = flowRate(waterTanks, avg)

    let temp = [...waterTanks]

    temp.forEach(element => {
        if (element.level != avg) {
            element.levelOut(upFlow, downFlow, avg)
        }
    });

    return temp
}

// empty tank at an index

export const emptyTank = (waterTanks,index) => {
    return waterTanks.map((e,i)=>{
        if(i!=index){
            return e
        }
        e.level = 0
        return e
    })
}

// fill tank at index

export const fill = (waterTanks,index)=>{
    return waterTanks.map((e,i)=>{
        if(i != index){
            return e
        }
        let balance = TANK_CAPACITY - e.level
        if(balance == 0){
            e.queue += TANK_FILL_BTN_CAPACITY
            return e
        }
        if(balance < TANK_FILL_BTN_CAPACITY){
            e.level += balance
            e.queue += TANK_FILL_BTN_CAPACITY - balance
            return e
        }
        e.level += TANK_FILL_BTN_CAPACITY;
        return e
    })
}
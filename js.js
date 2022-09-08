
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 33
// let superAge = myAge * 7

// let Age = myAge + superAge
// console.log(Age)

// let count = 5
// count = count + 2
// let county = 7
// county = county + 3

// console.log(count,county)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function inc(){
//     console.log("The button was clicked")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)

// }
// countdown()
// countdown()

// function num(){
//         console.log(42)
// }
// num()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function raceTime(){
//    let totalTime = lap1 + lap2 + lap3
//    console.log(totalTime)
// }
// raceTime()
// let lapsCompleted = 0;
// // lapsCompleted = lapsCompleted + 1
// // lapsCompleted = lapsCompleted + 1
// // lapsCompleted = lapsCompleted + 1
// // console.log(lapsCompleted)

// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

let add = document.getElementById("count")

let count = 0
 function inc() {
   
   count += 3
   add.textContent = count

}
function dec(){
    count -= 2
    add.innerText = count
}

let saveEl = document.getElementById("save-el")

function save(){

let countStr = count + " - "

saveEl.textContent += countStr

add.textContent = 0
count = 0

}


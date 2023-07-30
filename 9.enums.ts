//enums
//Use to enum constants 

enum SetCohice{
    AISLE="aisle",
    MIDDLE=5,
    WINDOW
}

//generate less code when run
// const enum SetCohice{
//     AISLE="aisle",
//     MIDDLE=5,
//     WINDOW
// }

const mySeat = SetCohice.AISLE
const newSeat:SetCohice = SetCohice.AISLE



console.log(SetCohice,newSeat,mySeat)
var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = { direction: "S" }



//fonction turn left

function turnLeft(rover) {
    if (rover.direction == "N") {
        rover.direction = "E"
        return rover
    }
    else if (rover.direction == "E") {
        rover.direction = "S"
        return rover
    }
    else if (rover.direction == "S") {
        rover.direction = "W"
        return rover
    }
    else {
        rover.direction = "N"
        return rover
    }
}
console.log(turnLeft(rover));

//fonction turn right

function turnRight(rover) {
    if (rover.direction == "N") {
        rover.direction = "W"
        return rover
    }
    else if (rover.direction == "W") {
        rover.direction = "S"
        return rover
    }
    else if (rover.direction == "S") {
        rover.direction = "E"
        return rover
    }
    else {
        rover.direction = "N"
        return rover
    }
}

//nouvelle variable
var rover2 = { X: 0, y: 0, }
Object.assign(rover , rover2)
console.log(rover)

//fonction moveForward 


// function moveForward(rover) {

// }
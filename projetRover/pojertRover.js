var prompt = require("prompt")

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


const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog:[]
}
//fonction erreur 
function ere(){
    return "erreur"
}


// funtion turnLeft
function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "E"
        return rover;
    } else if (rover.direction === "E") {
        rover.direction = "S"
        return rover;
    } else if (rover.direction === "S") {
        rover.direction = "W"
        return rover;
    } else if (rover.direction === "W") {
        rover.direction = "N"
        return rover;
    } else {
        return;
    }

}



// function tornRight
function turnRight(rover) {

    if (rover.direction === "N") {
        rover.direction = "W"
        return rover;
    } else if (rover.direction === "W") {
        rover.direction = "S"
        return rover;

    } else if (rover.direction === "S") {
        rover.direction = "E"
        return rover;
    } else if (rover.direction === "E") {
        rover.direction = "N"
        return rover;
    } else {
        return;
    }

}
// console.log(turnRight(rover));
// console.log(rover);

// movement du rover

function moveForward(rover) {

    if (rover.direction === "E") {
        rover.x += 1;
        return rover;
    }
    else if (rover.direction === "W") {
        rover.x -= 1;
        return rover;
    }
    else if (rover.direction === "S") {
        rover.y += 1;
        return rover;
    }
    else if (rover.direction === "N") {
        rover.y -= 1;
        return rover;
    } else {
        return;
    }

}

// console.log(moveForward(rover));

function pilotRover(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "l") {
            turnLeft(rover);
            rover.travelLog.push([rover.x ,rover.y])
        }
        else if (str[i] === "r") {
            turnRight(rover);
            rover.travelLog.push([rover.x ,rover.y])

        }
        else if (str[i] === "f") {
            moveForward(rover)
            rover.travelLog.push([rover.x ,rover.y])

        }
        else {
               return  "erreur"  
            }

        }
    }


pilotRover("lrfflf")
console.log(rover)

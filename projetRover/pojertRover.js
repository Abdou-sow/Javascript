var prompt = require("prompt")

var grid = [
    ["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
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
    travelLog: []
}
//fonction erreur 
function ere() {
    console.log("erreur");
}


// funtion turnLeft
function turnLeft(rover1) {
    if (rover1.direction === "N") {
        rover1.direction = "W"
        return rover1;
    } else if (rover1.direction === "W") {
        rover1.direction = "S"
        return rover1;
    } else if (rover1.direction === "S") {
        rover1.direction = "E"
        return rover1;
    } else if (rover1.direction === "E") {
        rover1.direction = "N"
        return rover1;
    } else {
        return;
    }

    grid[rover1.y][rover1.x] = rover1.direction
}



// function tornRight
function turnRight(rover1) {

    if (rover1.direction === "N") {
        rover1.direction = "E"
        return rover1;
    } else if (rover1.direction === "E") {
        rover1.direction = "S"
        return rover1;

    } else if (rover1.direction === "S") {
        rover1.direction = "W"
        return rover1;
    } else if (rover1.direction === "W") {
        rover1.direction = "N"
        return rover1;
    } else {
        return;
    }

    grid[rover1.y][rover1.x] = rover1.direction

}
// console.log(turnRight(rover));
// console.log(rover);

// movement du rover

function moveForward(rover1) {

    if (rover1.direction === "E") {
        if (rover1.x == 9) {
            return ere

        } else {
            rover1.x += 1;
            return rover1;
        }
    }
    else if (rover1.direction === "W") {
        if (rover1.x == 0) {
            return ere

        } else {
            rover1.x -= 1;
            return rover1;
        }
    }
    else if (rover1.direction === "S") {
        if (rover1.y == 9) {
            return ere

        } else {
            rover1.y += 1;
            return rover1;
        }
    }
    else if (rover1.direction === "N") {
        if (rover1.y == 0) {
            return ere
        } else {
            rover1.y -= 1;
            return rover1;
        }
    }
    var lastposition= travelLog[travelLog.length -1]
    grid[lastposition.y][lastposition.x]= " "
    grid[rover1.y][rover1.x] = rover1.direction

}

// console.log(moveForward(rover));

function pilotRover(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "l") {
            turnLeft(rover);
            // rover.travelLog.push([rover.x ,rover.y])
        }
        else if (str[i] === "r") {
            turnRight(rover);
            // rover.travelLog.push([rover.x ,rover.y])

        }
        else if (str[i] === "f") {

            rover.travelLog.push([rover.x, rover.y])
            moveForward(rover)

        }
        else {
            return "erreur"
        }

    }
}


// pilotRover("rfffrffflllfff")
// console.log(rover)


function instruction() {
    prompt.get(
        ["instruction"],

        function (err, res) {
            if (err) {
                return "erreur"
            }

            pilotRover(res.instruction)
            console.log(rover.travelLog);
            instruction()

        }
    )

}


instruction()

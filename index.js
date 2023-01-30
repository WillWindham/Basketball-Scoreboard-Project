let homePoints = 0
let guestPoints = 0

function homeOne() {
    homePoints += 1
    document.getElementById("home").textContent = homePoints
}

function homeTwo() {
    homePoints += 2
    document.getElementById("home").textContent = homePoints
}

function homeThree() {
    homePoints += 3
    document.getElementById("home").textContent = homePoints
}





function guestOne() {
    guestPoints += 1
    document.getElementById("guest").textContent = guestPoints
}

function guestTwo() {
    guestPoints += 2
    document.getElementById("guest").textContent = guestPoints
}

function guestThree() {
    guestPoints += 3
    document.getElementById("guest").textContent = guestPoints
}

let Guest_scoreOnePoint = document.getElementById("addOne_guest")
let Guest_scoreTwoPoint = document.getElementById("addTwo_guest")
let Guest_scoreThreePoint = document.getElementById("addThree_guest")

let Home_scoreOnePoint = document.getElementById("addOne_home")
let Home_scoreTwoPoint = document.getElementById("addTwo_home")
let Home_scoreThreePoint = document.getElementById("addThree_home")

let guestScore = document.getElementById("guestBuckets")
let homeScore = document.getElementById("homeBuckets")
countHome = 0
countGuest = 0
function incrementOne_home() {
    countHome +=1
    homeScore.textContent = countHome 
}
function incrementTwo_home() {
    countHome +=2
    homeScore.textContent = countHome 
}
function incrementThree_home() {
    countHome +=3
    homeScore.textContent = countHome 
}

function incrementOne_guest() {
    countGuest += 1
    guestScore.textContent = countGuest
}
function incrementTwo_guest() {
    countGuest += 2
    guestScore.textContent = countGuest
}
function incrementThree_guest() {
    countGuest += 3
    guestScore.textContent = countGuest
}
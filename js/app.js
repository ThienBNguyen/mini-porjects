let breakInput = document.getElementById("display-break")
let timeInput = document.getElementById("display-time")
const container = document.getElementById("container")
// const value = 1
function increase() {

}
container.addEventListener("click", function (event) {
    // const value = 1
    const element = event.target
    const elementTag = element.className
    // console.log(elementTag)
    if (elementTag == "fas fa-arrow-up break") {
        // value += 1
        breakInput.value = parseInt(breakInput.value) + 5
        // console.log(value)
    }
    else if (elementTag == "fas fa-arrow-down break") {

        const breakValue = parseInt(breakInput.value) - 5
        console.log(breakValue)
        if (breakValue < 0) {
            breakInput.value = 0
        }
        else {
            breakInput.value = breakValue
        }

    } else if (elementTag == "fas fa-arrow-up length") {
        timeInput.value = parseInt(timeInput.value) + 5

    } else if (elementTag == "fas fa-arrow-down length") {
        const timeValue = parseInt(timeInput.value) - 5
        if (timeValue < 0) {
            timeInput.value = 0
        }
        else {
            timeInput.value = timeValue
        }

    }

    console.log(timeInput.value)
})
var interval
function pomodoro(mins) {

}
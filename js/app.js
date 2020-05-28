let breakInput = document.getElementById("display-break")
let timeInput = document.getElementById("display-time")
const container = document.getElementById("container")
var seconds = 0;
var restSeconds = 0
var audio = new Audio('./sound/3.mp3');
var interval;
var breakInterval
function convertseconds(s) {
    let min = Math.floor(s / 60)
    let sec = s % 60
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 2 }).format(min) + ":" + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sec)
}


function breakTime(rest) {
    restSeconds = rest * 60 || 0;

    breakInterval = setInterval(function () {
        document.getElementById("timer").innerHTML = convertseconds(restSeconds)
        restSeconds--;
        if (restSeconds === 0) {
            clearInterval(breakInterval);
            audio.play();
            document.getElementById("timer").innerHTML = 00 + ":" + 00

        }
    }, 1000)
}
function pomodoro(time, rest) {
    seconds = time * 60 || 0;
    interval = setInterval(function () {
        document.getElementById("timer").innerHTML = convertseconds(seconds)
        seconds--;
        if (seconds === 0) {

            audio.play();
            breakTime(rest)
            clearInterval(interval);

        }
    }, 1000)
}
container.addEventListener("click", function (event) {
    const element = event.target
    const elementTag = element.className
    let breakTest = 0
    let sessionTest = 0
    if (elementTag == "fas fa-arrow-up break") {
        breakInput.value = parseInt(breakInput.value) + 5
    }
    else if (elementTag == "fas fa-arrow-down break") {

        const breakValue = parseInt(breakInput.value) - 5
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

    } else if (elementTag == "fas fa-play") {
        if (timeInput.value == 0 || breakInput.value == 0) {
            alert('Please add more time!!')
            clearInterval(interval)
            clearInterval(breakInterval)
        } else {
            pomodoro(timeInput.value, breakInput.value)

        }
    } else if (elementTag == "fas fa-pause") {

        clearInterval(interval)
        clearInterval(breakInterval)
    }
    else if (elementTag == "fas fa-sync-alt") {
        clearInterval(interval)
        clearInterval(breakInterval)
        document.getElementById("timer").innerHTML = 00 + ":" + 00
    }
})

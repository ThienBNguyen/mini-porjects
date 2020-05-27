let breakInput = document.getElementById("display-break")
let timeInput = document.getElementById("display-time")
const container = document.getElementById("container")
// const value = 1
var seconds = 0;
var restSeconds = 0
var audio = new Audio('./sound/3.mp3');
var interval;
// var counter = 0
function convertseconds(s) {
    let min = Math.floor(s / 60)
    let sec = s % 60
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 2 }).format(min) + ":" + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sec)
}
function playAudio() {

}
// function pomodoro(mins) {
//     seconds = mins * 60 || 0;

//     interval = setInterval(function () {
//         document.getElementById("test").innerHTML = convertseconds(seconds)
//         seconds--;
//         if (seconds === 0) {
//             clearInterval(interval);
//             // alert("🚨 It is Cool 😎. I wish you could share ");
//             audio.play();
//         }
//     }, 10)
// }
function pomodoro(time, rest) {
    seconds = time * 60 || 0;
    restSeconds = rest * 60 || 0;
    interval = setInterval(function () {
        document.getElementById("test").innerHTML = convertseconds(seconds)
        seconds--;
        if (seconds === 0) {

            // alert("🚨 It is Cool 😎. I wish you could share ");
            audio.play();
            restSeconds--
            document.getElementById("test").innerHTML = convertseconds(restSeconds)
            clearInterval(interval);
        }
    }, 10)
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

    } else if (elementTag == "fas fa-play") {
        pomodoro(timeInput.value, breakInput.value)
    }
})

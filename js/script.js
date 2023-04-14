const daysDiv = document.querySelector('.days')
const hoursDiv = document.querySelector('.hours')
const minutesDiv = document.querySelector('.minutes')
const secondsDiv = document.querySelector('.seconds')

const year = new Date().getFullYear()
const christmas = `25 Dec ${year}`

const formatTime = time => {
    return time < 10 ? `0${time}` : time
}

const countdown = () => {
    const christmasDate = new Date(christmas)
    const currentDate = new Date()

    const totalSeconds = (christmasDate - currentDate) / 1000

    const seconds = Math.round(totalSeconds) % 60
    const minutes = Math.round(totalSeconds / 60) % 60
    const hours = Math.round(totalSeconds / 3600) % 24
    const days = Math.round(totalSeconds / 3600 / 24)

    daysDiv.textContent = days
    hoursDiv.textContent = formatTime(hours)
    minutesDiv.textContent = formatTime(minutes)
    secondsDiv.textContent = formatTime(seconds)
}
countdown()
setInterval(countdown, 1000)

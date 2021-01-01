const secHand = document.querySelector(".sec");
const minsHand = document.querySelector(".mins");
const hourHand = document.querySelector(".hour");

setDate = () => {
const dateToday = new Date();

// Add seconds Hand
const sec = dateToday.getSeconds()
const secDegrees = (sec / 60) * 360 + 90;
secHand.style.transform = `rotate(${secDegrees}deg)`;

// Add minutes Hand
const mins = dateToday.getMinutes()
const minDegrees = (mins/60) * 360 + (sec/60) * 6 + 90;
minsHand.style.transform = `rotate(${minDegrees}deg)`;

// Add Hour Hand
const hour = dateToday.getHours() % 12 || 12
const hourDegrees = (hour / 12) * 360 + (mins/60)*30 + 90;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;

};
setDate();
setInterval(setDate, 1000);

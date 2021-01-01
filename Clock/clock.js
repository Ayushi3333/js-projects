let dateToday = new Date();


let hour = dateToday.getHours() % 12 || 12
let hourHand = document.querySelector(".hour");
console.log(hour);


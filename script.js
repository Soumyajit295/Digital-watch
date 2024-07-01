let day = document.querySelector('#Day');
let month = document.querySelector('#Month');
let dateElement = document.querySelector('#Date');

let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');

function setTime() {
    let date = new Date();
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Get the current day, month, and year
    let currentDay = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let currentMonth = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let currentYear = date.getFullYear();

    day.textContent = daysOfWeek[date.getDay()];
    month.textContent = months[date.getMonth()];
    dateElement.textContent = currentDay + '/' + currentMonth + '/' + currentYear;

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hour.textContent = h < 10 ? '0' + h : h;
    minute.textContent = m < 10 ? '0' + m : m;
    second.textContent = s < 10 ? '0' + s : s;
}

setInterval(setTime, 1000);
setTime();

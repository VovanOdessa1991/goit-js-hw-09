import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const textTable = document.querySelector('input#datetime-picker');
const btn = document.querySelector('[ data-start]');
let dateTest;
let dateTestSum;


btn.addEventListener('click', timerStart);

const timer = {
  days: document.querySelector('[ data-days]'),
  hours: document.querySelector('[ data-hours]'),
  minutes: document.querySelector('[ data-minutes]'),
  seconds: document.querySelector('[ data-seconds]'),
};

function timerStart() {
  console.log('timerStart!');
  btn.setAttribute('disabled', true);
  let timerId;
    timerId = setInterval(() => {

    dateTestSum = dateSum();
    if (dateTestSum <= 0) {
      clearInterval(timerId);
      console.log("timerStop !)");
      // btn.removeAttribute('disabled');
      return;
    }
    displayTime(dateTestSum);
  },1000);

}
// console.log(btn.hasAttribute(data-start));
btn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
     console.log(selectedDates[0]);
    //  const dateTest = new Date(selectedDates[0]);
    getTime(selectedDates);
  },
};

function getTime(selectedDates) {
  dateTest = new Date(selectedDates[0]);
  dateTestSum = dateSum();
  if (dateTestSum <= 0) {
    window.alert("Please choose a date in the future");
    timer.days.textContent = "00";
    timer.hours.textContent =  "00";
    timer.minutes.textContent = "00";
    timer.seconds.textContent = "00";
    btn.setAttribute('disabled', true);
    return;
  }
  displayTime(dateTestSum);
  // let timeConvert = convertMs(dateTestSum);
  // timer.days.textContent = timeConvert.days.toString().padStart(2, "0");
  // timer.hours.textContent = timeConvert.hours.toString().padStart(2, "0");
  // timer.minutes.textContent = timeConvert.minutes.toString().padStart(2, "0");
  // timer.seconds.textContent = timeConvert.seconds.toString().padStart(2, "0");
  btn.removeAttribute('disabled');
}

function convertMs(ms) {

  
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function dateSum() {
  let now = new Date();
  let dateSum = dateTest - now;
  return dateSum;
}
function displayTime(dateSum) {
   let timeConvert = convertMs(dateSum);
  timer.days.textContent = timeConvert.days.toString().padStart(2, "0");
  timer.hours.textContent = timeConvert.hours.toString().padStart(2, "0");
  timer.minutes.textContent = timeConvert.minutes.toString().padStart(2, "0");
  timer.seconds.textContent = timeConvert.seconds.toString().padStart(2, "0");
  // console.log("display time!");
   
 }

flatpickr(textTable, options);

textTable.addEventListener("input", ds);
function ds(event) {
   console.log(event.target.value);

}


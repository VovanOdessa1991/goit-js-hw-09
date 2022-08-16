const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const becgrountRef = document.querySelector("body");

// console.log(becgrountRef);
// becgrountRef.style.backgroundColor = "teal";

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);




function start() {
   btnStart.disabled = true;
   timerId = setInterval(() => {
      becgrountRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function stop() {
   btnStart.disabled = false;
   clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const timerDisplay = document.getElementById("pomodoro-timer-display");
const startBtn = document.querySelector(".start-button");
const pauseBtn = document.querySelector(".pause-button");
const resetBtn = document.querySelector(".reset-button");


let isTimerRunning = false;
let timerDuration = 1500; // 25 minutes in seconds
let timerId = null;


function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  timerDisplay.textContent = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
}

// Start timer function
function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timerId = setInterval(() => {
      timerDuration -= 1;
      updateTimerDisplay(timerDuration);
      if (timerDuration <= 0) {
        clearInterval(timerId);
        alert("Time is up!");
        resetTimer();
      }
    }, 1000);
  }
}

// Pause timer function
function pauseTimer() {
  clearInterval(timerId);
  isTimerRunning = false;
}

// Reset timer function
function resetTimer() {
  clearInterval(timerId);
  timerDuration = 1500; // Reset to 25 minutes
  isTimerRunning = false;
  updateTimerDisplay(timerDuration);
}


startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

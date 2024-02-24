let workTime = 25 * 60; // 25 minutes in seconds  
let breakTime = 5 * 60;  // 5 minutes in seconds
let secondsRemaining = workTime; 
let isRunning = false; 
let timerInterval = null; 
let isBreakTime = false; 

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
// Add references to other buttons too...

function displayTime() {
   // Code to convert 'secondsRemaining' into minutes and seconds and update 'timerDisplay'
}

function startTimer() { 
    if (isRunning) return; // Don't start another timer if one is already running 
   
    isRunning = true;
    timerInterval = setInterval(() => {
        secondsRemaining--; 
        displayTime();  
    }, 1000); // Update every second
} 

// Add functions for pause, reset (and switching between work/break timers later)

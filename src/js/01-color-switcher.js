const bodyRef = document.querySelector('body');
const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');

let intervalId;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

stopButtonRef.disabled = true;

const handleStartClick = () => {
  startButtonRef.disabled = true;
  stopButtonRef.disabled = false;

  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const handleStopClick = () => {
  stopButtonRef.disabled = true;
  startButtonRef.disabled = false;

  clearInterval(intervalId);
};

startButtonRef.addEventListener('click', handleStartClick);

stopButtonRef.addEventListener('click', handleStopClick);
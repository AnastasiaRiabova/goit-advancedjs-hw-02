import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateRef = document.querySelector('#datetime-picker');
const buttonRef = document.querySelector('[data-start]');
const buttonReloadRef = document.querySelector('[data-reload]');
const dayRef = document.querySelector('[data-days]');
const hourRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
const valuesRef = document.querySelectorAll('.value');

let timerId = null;

buttonRef.disabled = true;

function handleOnClose(selectedDates) {
  console.log(selectedDates);
  if (selectedDates[0] <= Date.now()) {
    buttonRef.disabled = true;
    return iziToast.show({
      message: 'Please choose a date in the future!',
      color: 'red',
      position: 'topRight',
    });
  }
  buttonRef.disabled = false;
}

flatpickr(dateRef, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: handleOnClose,
});

const handleStartClick = () => {
  buttonRef.disabled = true;
  dateRef.disabled = true;
  timerId = setInterval(() => {
    const chosenDate = new Date(dateRef.value);
    const timeToFinish = chosenDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeToFinish);
    dayRef.textContent = formatValue(days);
    hourRef.textContent = formatValue(hours);
    minutesRef.textContent = formatValue(minutes);
    secondsRef.textContent = formatValue(seconds);

    if (timeToFinish < 1000) {
      clearInterval(timerId);
      dateRef.disabled = false;
    }
  }, 1000);
};
const formatValue = value => `${value}`.padStart(2, '0');

buttonRef.addEventListener('click', handleStartClick);

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

buttonReloadRef.addEventListener('click', () => location.reload());

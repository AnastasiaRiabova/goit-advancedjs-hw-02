// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const handleSubmitForm = event => {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;

  const amountValue = amount.value;
  const delayValue = Number(delay.value);
  const stepValue = step.value;

  Array.from({ length: amountValue }).forEach((_, i) => {
    const position = i + 1;
    const delays = delayValue + stepValue * i;

    createPromise(position, delays)
      .then(({ position, delay }) => {
        iziToast.show({
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          position: 'topRight',
          color: 'green',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          position: 'topRight',
          color: 'red',
        });
      });
  });

  event.currentTarget.reset();
};

form.addEventListener('submit', handleSubmitForm);

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

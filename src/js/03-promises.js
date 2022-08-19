// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const form = document.querySelector('form');

form.addEventListener("submit", submit);
// form.preventDefault();

function submit(event) {
  event.preventDefault();
  // console.log()
  //  let {
  //     elements: { delay= delay.value, step=step.value, amount= amount.value  }
  //  } = event.currentTarget;
  let delay = event.currentTarget.delay.value;
  const step = event.currentTarget.step.value;
  const amount = event.currentTarget.amount.value;

  event.currentTarget.amount.value = null;
  event.currentTarget.step.value = null;
  event.currentTarget.delay.value = null;

  
  
  // console.log("amount =>", amount);
  for (let position = 1; position <= amount; position++) {
    // console.log("Шаг =>", position);
    
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay = parseInt(delay) + parseInt(step);
    // console.log("delay", delay);
  }
  // console.log("test3");
  
}


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }

    }, delay);
  });
 
}

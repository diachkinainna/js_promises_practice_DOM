'use strict';

const firstPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    resolve('First promise was resolved');
  });

  setTimeout(() => {
    reject(new Error('First promise was rejected'));
  }, 3000);
});

const secondPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    resolve('Second promise was resolved');
  });

  document.addEventListener('contextmenu', (e) => {
    resolve('Second promise was resolved');
  });
});

const thirdPromise = new Promise((resolve) => {
  let leftClick = false;
  let rightClick = false;

  document.addEventListener('click', () => {
    leftClick = true;

    if (leftClick && rightClick) {
      resolve('Third promise was resolved');
    }
  });

  document.addEventListener('contextmenu', () => {
    rightClick = true;

    if (leftClick && rightClick) {
      resolve('Third promise was resolved');
    }
  });
});

firstPromise
  .then((data) => {
    const succesMessage = document.createElement('div');

    succesMessage.textContent = data;
    succesMessage.setAttribute('data-qa', 'notification');
    succesMessage.classList.add('success');
    document.body.append(succesMessage);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.textContent = error.message;
    errorMessage.setAttribute('data-qa', 'notification');
    errorMessage.classList.add('error');
    document.body.append(errorMessage);
  });

secondPromise
  .then((data) => {
    const succesMessage = document.createElement('div');

    succesMessage.textContent = data;
    succesMessage.setAttribute('data-qa', 'notification');
    succesMessage.classList.add('success');
    document.body.append(succesMessage);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.textContent = error.message;
    errorMessage.setAttribute('data-qa', 'notification');
    errorMessage.classList.add('error');
    document.body.append(errorMessage);
  });

thirdPromise
  .then((data) => {
    const succesMessage = document.createElement('div');

    succesMessage.textContent = data;
    succesMessage.setAttribute('data-qa', 'notification');
    succesMessage.classList.add('success');
    document.body.append(succesMessage);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.textContent = error.message;
    errorMessage.setAttribute('data-qa', 'notification');
    errorMessage.classList.add('error');
    document.body.append(errorMessage);
  });

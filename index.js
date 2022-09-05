// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const formEl = document.querySelector('#form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = ['loan', 'rate', 'loanLength'];
  const elements = [];

  [...e.target.elements].forEach (el => {
    if (inputs.includes(el.id)) {
      elements.push(el)
    } 
  })

  const principal = parseInt(elements[0].value, 10);
  const rate = elements[1].value;
  const loanLength = elements[2].value;

  const interestRateMonths = (parseFloat(rate) * 0.01) / 12;
  const loanLengthMonths = parseInt(loanLength) * 12;

  const top =
    interestRateMonths * Math.pow(1 + interestRateMonths, loanLengthMonths);
  const bottom = Math.pow(1 + interestRateMonths, loanLengthMonths) - 1;

  const morgagePayment = parseInt(principal * (top / bottom));

  const infoTextEl = document.querySelector('.info-text');

  infoTextEl.textContent = `Your monthly morgage payments will be $${morgagePayment}`;

  document.getElementById('loan').value = '';
  document.querySelector('#loanLength').value = '';
  document.querySelector('#rate').value = '';
});

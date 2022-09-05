// Import stylesheets
import './style.css';

//js
//find 3 inputs(without a button)
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

  //
  const principal = parseInt(elements[0].value, 10); 
  const rate = elements[1].value;
  const loanLength = elements[2].value;

  //calculations 
  const interestRateMonths = (parseFloat(rate) * 0.01) / 12; // parseFloat - parsing into десятичн 
  const loanLengthMonths = parseInt(loanLength) * 12; // parseInt - parsing into целое 
  const top =
    interestRateMonths * Math.pow(1 + interestRateMonths, loanLengthMonths);
  const bottom = Math.pow(1 + interestRateMonths, loanLengthMonths) - 1;
  const morgagePayment = parseInt(principal * (top / bottom));

  // adding "your morgage payment ..."
  const infoTextEl = document.querySelector('.info-text');
  infoTextEl.textContent = `Your monthly mortgage payments will be $${morgagePayment}`;

  //clean inputs after submission
  document.getElementById('loan').value = '';
  document.querySelector('#loanLength').value = '';
  document.querySelector('#rate').value = '';
});

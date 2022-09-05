// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const formEl = document.querySelector('#form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target.elements);
  console.log(e.target);
  const elements = [...e.target.elements];
  elements.pop();

  const principal = elements[0].value;
  const rate = elements[1].value;
  const loanLength = elements[2].value;

  console.log({
    principal,
    rate,
    loanLength,
  });
});

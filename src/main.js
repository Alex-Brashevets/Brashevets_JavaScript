import { handleNumber } from './utils/numberHandler.js';
import { handleName } from './utils/nameHandler.js';
import { handleArray } from './utils/arrayHandler.js';

const form = document.getElementById('algorithmForm');
const resultsDiv = document.getElementById('results');

if (!form || !resultsDiv) {
  console.warn('Form or results container not found in DOM');
}

const parseNumberArray = (input) => {
  if (!input) return [];
  return input
    .split(',')
    .map(s => s.trim())
    .filter(Boolean) 
    .map(Number) 
    .filter(n => !isNaN(n));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const numberInput = document.getElementById('numberInput')?.value;
  const nameInput = document.getElementById('nameInput')?.value;
  const arrayInput = document.getElementById('arrayInput')?.value;
  const number = parseFloat(numberInput);
  const name = nameInput?.trim() || '';
  const array = parseNumberArray(arrayInput);
  const numberResult = handleNumber(number);
  const nameResult = handleName(name);
  const arrayResult = handleArray(array);

  resultsDiv.innerHTML = `
    <h2>Results</h2>
    <p><strong>Number check:</strong> ${numberResult ?? '—'}</p>
    <p><strong>Name check:</strong> ${nameResult}</p>
    <p><strong>Multiples of 3:</strong> ${
      arrayResult.length > 0 ? `[${arrayResult.join(', ')}]` : '(none)'
    }</p>
  `;

  resultsDiv.classList.add('visible');
};

form.addEventListener('submit', handleSubmit);
// main.js

import { add as sum, subtract as diff } from './mathOperations.js';

const result1 = sum(5, 3);  // Adds 5 and 3
const result2 = diff(10, 4); // Subtracts 4 from 10

console.log(`Sum: ${result1}`);   // Sum: 8
console.log(`Difference: ${result2}`);  // Difference: 6
// main.js

document.getElementById('submit-btn').addEventListener('click', async () => {
  const word = document.getElementById('word-input').value;

  if (word) {
    try {
      // Dynamically import the stringUtils module only when user provides a word
      const { capitalize } = await import('./stringUtils.js');
      
      const capitalizedWord = capitalize(word);
      document.getElementById('result').textContent = `Capitalized Word: ${capitalizedWord}`;
    } catch (error) {
      console.error('Error importing module:', error);
    }
  } else {
    document.getElementById('result').textContent = 'Please enter a word!';
  }
});

// stringUtils.js

export function capitalize(word) {
  if (typeof word === 'string') {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else {
    throw new Error('Input must be a string');
  }
}

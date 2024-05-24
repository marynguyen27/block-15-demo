/* 
PROMPT: Given a random sentence,
make an object that counts every letter of that sentence

"Hello"

{
    'H': 1
    'E': 1
    'L': 2
    'O': 1
}

*/

let inputStr = 'hello world';

function stringCounter(inputStr) {
  const strArray = inputStr.split('');
  console.log('Array:', strArray);
  let answer = {};
  for (let i = 0; i < strArray.length; i++) {
    let letter = strArray[i];

    if (letter === ' ') {
      continue; // continue the loop at the next value of i (skip the space, only counts letters)
      // break; // ends the loop right here (counts things before the space)
    }

    // is this letter already in the object?
    // if it's new, we add it to the object
    if ((!Object.hasOwn(answer), letter)) {
      answer[letter] = 1; // because we're using a variable, use the brackets
    } else {
      // if it's not new, then we update the letter value
      answer[letter] += 1;
    }
  }

  return answer;
}

console.log('Answer:', stringCounter(inputStr));

/* EXTRA STRING STUFF */
let myStr = 'Mary';
console.log(myStr[2]);
// output should return the letter r (in position 2)

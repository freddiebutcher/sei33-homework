console.log('run');
// const mixMatch = function (mix, match) {
//   if (mix.length > 2 && match.length > 2) {
//     const mixMatch1 = match.substring(0,2) + mix.substring(2);
//     const mixMatch2 = mix.substring(0,2) + match.substring(2);
//     const result = `${mix} ${match} results to ${mixMatch1} ${mixMatch2}`;
//     console.log(result);
//   } else {
//     console.log(`${mix} ${match} results to ${mix} ${match}`);
//   }
// };
//
// mixMatch('mix', 'pad');

//
//
// const fixStart = function (word) {
//   let editedWord = word[0];
//   for (let i = 1; i < word.length; i++) {
//       if (word[i]===word[0]) {
//         editedWord += '*';
//       } else {
//         editedWord += word[i]
//       }
//   }
//   console.log(word, editedWord);
// };
//
// fixStart('babble');
//
//
// const verbing = function (verb) {
//
//   if (verb.length > 2) {
//     if (verb.endsWith("ing")) {
//       verb += "ly"
//     } else {
//       verb += "ing";
//     }
//   }
//     console.log(verb);
// }
//
// verbing( 'swim' );
// verbing( 'swiming' );
//
//
// const notBad = function (sentence) {
//   if (sentence.includes('not') && sentence.includes('bad')) {
//     const notIndex = sentence.indexOf('not');
//     const badIndex = sentence.indexOf('bad');
//     if (badIndex > notIndex) {
//       const beforeNot = sentence.substring(0,notIndex);
//       //console.log('beforeNot', beforeNot);
//       const afterBad = sentence.substring(badIndex+3, sentence.length);
//       //console.log('afterBad', afterBad);
//       const finalSentence = beforeNot + "good" + afterBad;
//       console.log('finalSentence:', finalSentence);
//     }
//   } else {
//     console.log(sentence);
//   }
// }
//
// notBad('The dinner is not that bad actually.');


//WORD GAME
/*
const guessLetter = function (letter) {

  letter = letter.toUpperCase();
  const playWord = ['L','E','A','T','H','E','R'];
  const guessWord = ['_','_','_','_','_','_','_'];
  let maxWrongGuess = 6;
  let guessedLetterList = [];

  if (guessedLetterList.includes(letter)) {
    console.log('Repeated letter:', letter);
  } else {
    guessedLetterList.push(letter);

    if (playWord.includes(letter)) {
      for (let w=0; w<playWord.length; w++) {
          if (playWord[w]===letter) {
            guessWord[w]=playWord[w];
          }
      }
      console.log("Bravo! You have found a new letter");
      console.log(guessWord);

      if (!guessWord.includes('_')) {
        console.log("Congratulations! You have won this game.");
        console.log(guessWord);
        alert ("Congratulations! You have won this game.");
        return;
      }
    } else {
      maxWrongGuess--;
      console.log("Sorry, wrong guess.");
      console.log(guessWord);
      if (maxWrongGuess<=0) {
        console.log("Badluck, you have lost this game.");
        console.log(guessWord);
        alert ("Badluck, you have lost this game.");
        return;
      }
    }
  }

  guessLetter(prompt('guess letter'));
};

guessLetter(prompt('guess letter'));
*/

// Credit Card Validation
/*
const sameDigits = function (input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[0]) {
      return false
    }
  }
  return true;
}

const sumOfDigits = function (input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += parseInt(input[i]);
  }
  return total;
}

const allDigits = function (input) {
  return !isNaN(input);
}

const validateCreditCard = function (input) {
  while (input.includes('-')) {
    input = input.replace('-', '')
  }
  if (input.length === 16 && input[input.length-1] % 2 === 0 && sumOfDigits(input) > 16 && sameDigits(input) === false && allDigits(input) === true) {
    return `Card is valid.`
  }
  return `Card is invalid.`
}

console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
*/

/*
const winningRule = [ [0, 1, 2], [3, 4, 5], [6, 7 ,8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

//const played = ["o", "x", "o", "x", "o", "x", "o", "x", "o"]
              // 0    1    2    3    4    5    6    7    8
const played = ["x", "o", "x", "x", "o", "o", "x", "x", "o"];
//const played = ["x", "x", "o", "o", "o", "x", "x", "o", "x"];
played[this.attr(id)] = 'x'; player

played[this.attr(id)] = 'o'; player

     const findWinner = function (played, side) {
        let sum;
        let w;
        for(let i = 0; i < winningRule.length; i++) {
          w = winningRule[i];
          sum = 0;

          for(let b = 0; b < w.length; b++) {
            if(played[w[b]] === side) {
            console.log('sumbefore', sum);
              sum++
            }
            console.log('sumafter', sum);
            if(sum === 3) {
                console.log("winner", side);
                return;
              }
          }
        }
        console.log("draw");
        return;
      }

findWinner(played, 'x');
*/
/*
const array1 = ["one", "two", "three", "four"]

const reverseArray = function (array) {
  let reverse = [];
  // for (let i = array.length-1; i >= 0; i--) {
  //   reverse.push(array[i]);
  // }
  // for (let i = 0; i < array.length; i++) {
  //   reverse.unshift(array[i]);
  // }
  // console.log(reverse);
  console.log(array.reverse());
}

reverseArray(array1);

const array2 = ["one", "two", ["three", "four"]];

const flattenArray = function (array) {
  let flatten = [];
  //for (let i = 0; i < array.length; i++) {

    // if (array[i] instanceof Array) {
    //   for (let j = 0; j < array[i].length; j++) {
    //     flatten.push(array[i][j])
    //   }
    // } else {
    //   flatten.push(array[i])
    // }

    // if (Array.isArray(array[i])) {
    //   flatten = flatten.concat(array[i])
    // } else {
    //   flatten.push(array[i])
    // }

  //}
  //console.log(flatten);
  console.log(array.flat());
}

flattenArray(array2);
*/

/*
// Version 1

const pairwise = {

  cleanNumber: function (input) {
    let number = [];
    let numerals = "0123456789"

    for (let i = 0; i < input.length; i++) {
      if (numerals.indexOf(input[i]) !== -1) {
        number.push(input[i])
      }
    }
    return number.join("")
  },

  CheckValidation: function (input) {
    const number = this.cleanNumber(input)
    if (number.length === 11 & number[0] === "1") {
      return number.substr(1)
    } else if (number.length === 10) {
      return number;
    } else {
      return "0000000000";
    }
  },

  getFormattedNumber: function (input) {
    const validNumber = this.CheckValidation(input)
    const areaCode = validNumber.substr(0, 3)
    const exchangeCode = validNumber.substr(3,3);
    const remaining = validNumber.substr(6);
    return `(${areaCode}) ${exchangeCode}-${remaining}`
  }

}

 console.log(pairwise.getFormattedNumber('11234567890'));
*/
  // console.log('112aghh34567890'.match(/\d/g));

// Version 2
  const pairwise = {

    cleanNumber (input) {
      // let number = input.match(/\d/g);
      let number = input.replace(/[^0-9]+/g, '');
      // number = number.join("");

      return (number.length === 11 && number[0] === "1") ? number.substr(1) : number
    },

    CheckValidation (input) {
      const number = this.cleanNumber(input)
      return (number.length !== 10) ? "0000000000" : number
    },

    getFormattedNumber (input) {
      const validNumber = this.CheckValidation(input)
      const areaCode = validNumber.substr(0, 3)
      const exchangeCode = validNumber.substr(3,3);
      const remaining = validNumber.substr(6);
      return `(${areaCode}) ${exchangeCode}-${remaining}`
    }

  }

   console.log(pairwise.getFormattedNumber('11234567890'));

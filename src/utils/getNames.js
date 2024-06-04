export function changeCasing(word) {
  const wordToUpperCase = word.split(' ').map((item, i) => {
    return (
      item.split('').at(0).toUpperCase() + item.split('').slice(1).join('')
    );
  });

  const wordToLowerCase = word.split(' ').map((item, i) => {
    return item.toLowerCase();
  });
  return { wordToUpperCase, wordToLowerCase };
}

export function reduceWords(word, separator) {
  const { wordToLowerCase } = changeCasing(word);
  const newWord = wordToLowerCase.reduce((init, cur) => init + separator + cur);
  return newWord;
}

// export function changeCasing(word) {
//   const newWord = word.split(' ').map((item, i) => {
//     return (
//       item.split('').at(0).toUpperCase() + item.split('').slice(1).join('')
//     );
//   });
//   return newWord;
// }

export function getNames(name) {
  const { wordToUpperCase } = changeCasing(name);
  const firstName = wordToUpperCase[0];
  const lastName = wordToUpperCase.length > 1 ? wordToUpperCase[1] : '';
  const fullName = firstName + ' ' + lastName;
  const firstLetters = [];
  wordToUpperCase.forEach((item) =>
    firstLetters.push(item.split('').at(0).toUpperCase()),
  );
  const initials = firstLetters.reduce((acc, letter) => acc + letter);
  return { wordToUpperCase, firstName, lastName, fullName, initials };
}

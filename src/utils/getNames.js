export function changeCasing(word) {
  const newWord = word.split(' ').map((item, i) => {
    return (
      item.split('').at(0).toUpperCase() + item.split('').slice(1).join('')
    );
  });
  return newWord;
}

export function getNames(name) {
  const nameArr = changeCasing(name);
  const firstName = nameArr[0];
  const lastName = nameArr.length > 1 ? nameArr[1] : '';
  const fullName = firstName + ' ' + lastName;
  const firstLetters = [];
  nameArr.forEach((item) =>
    firstLetters.push(item.split('').at(0).toUpperCase()),
  );
  const initials = firstLetters.reduce((acc, letter) => acc + letter);
  return { nameArr, firstName, lastName, fullName, initials };
}

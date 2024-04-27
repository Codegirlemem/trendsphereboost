export function getNames(name) {
  const nameArr = name.split(' ').map((item, i) => {
    return (
      item.split('').at(0).toUpperCase() + item.split('').slice(1).join('')
    );
  });
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

export function addItemsToArray(item = {}, arr = []) {
  arr.push(item);
  return arr;
}

export function updateObjectArray(array, object) {
  let index = array.findIndex((item) => item.id === object.id);

  if (index !== -1) {
    array.splice(index, 1, object);
  }
  return array;
}

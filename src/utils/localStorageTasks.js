function getLocalStorageItem(key) {
  const items = localStorage.getItem(key);
  const parsedItems = items ? JSON.parse(items) : [];

  return parsedItems;
}

function setLocalStorageItem(item, previous, key) {
  previous.push(item);
  localStorage.setItem(`${key}`, JSON.stringify(previous));
}

function deleteLocalStorageItem(key) {
  localStorage.removeItem(key);
}

export { getLocalStorageItem, setLocalStorageItem, deleteLocalStorageItem };

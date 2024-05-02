function getLocalStorageItem(key) {
  const items = localStorage.getItem(key);
  const parsedItems = items ? JSON.parse(items) : [];

  return parsedItems;
}


function setLocalStorageItem(key, value) {
  localStorage.setItem(`${key}`, JSON.stringify(value));
}

function deleteLocalStorageItem(key) {
  localStorage.removeItem(key);
}

export { getLocalStorageItem, setLocalStorageItem, deleteLocalStorageItem };

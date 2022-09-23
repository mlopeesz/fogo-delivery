export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

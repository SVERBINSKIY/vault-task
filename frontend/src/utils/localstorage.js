export const saveToLS = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const removeFromLS = (key) => localStorage.removeItem(key);
export const getDataFromLS = (key) => JSON.parse(localStorage.getItem(key));

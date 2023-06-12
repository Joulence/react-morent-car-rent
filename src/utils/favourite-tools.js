export const addFav = (key) => {
  localStorage.setItem(key, key);
};

export const getFav = (key) => {
  return localStorage.getItem(key);
};

export const deleteFav = (key) => {
  localStorage.removeItem(key);
};

export const addFav = (car) => {
  localStorage.setItem(car.id, JSON.stringify(car));
};

export const getFav = (car) => {
  return localStorage.getItem(car);
};

export const deleteFav = (key) => {
  localStorage.removeItem(key);
};

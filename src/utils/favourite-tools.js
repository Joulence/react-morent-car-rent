// export const addFav = (key) => {
//   localStorage.setItem(key, key);
// };

export const addFav = (car) => {
  // console.log(car.id);
  localStorage.setItem(car.id, JSON.stringify(car));
};

export const getFav = (car) => {
  return localStorage.getItem(car);
};

export const deleteFav = (key) => {
  localStorage.removeItem(key);
};

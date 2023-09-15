//JSON.stringfy transforma array em string
export const SetItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//JSON.parse transforma string em array
export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const saveState = (data: any) => {
  localStorage.setItem('favourites', JSON.stringify(data));
};
export const loadState = () => {
  return JSON.parse(localStorage.getItem('favourites')) || { favourites: [] };
};

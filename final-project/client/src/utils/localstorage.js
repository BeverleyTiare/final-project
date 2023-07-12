// localStorage.js

const LOCAL_STORAGE_KEY = 'sleepApp';

export const saveToLocalStorage = (data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedData);
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedData === null) {
      return undefined; // or return a default value if necessary
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading data from localStorage:', error);
    return undefined; // or return a default value if necessary
  }
};

export const removeFromLocalStorage = () => {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error('Error removing data from localStorage:', error);
  }
};

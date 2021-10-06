const store = [];
const localstorageMock = {
  getItem: (key) => store[key],
  setItem: (key, value) => {
    store[key] = value;
  },
};

export default localStorageMock;
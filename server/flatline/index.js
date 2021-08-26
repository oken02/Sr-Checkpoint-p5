export const groupBy = (collection, iterator) => {
  const res = {};
  for (const el of collection) {
    const key = typeof iterator == "function" ? iterator(el) : el[iterator];

    if (res[key]) {
      res[key].push(el);
    } else {
      res[key] = [el];
    }

  }
  return res;
};


export const flowRight = (...functions) => {
  //  [12345]
  return (...initialValue) => {
    for (let i = functions.length - 1; i >= 0; i--) {
      initialValue = [functions[i](...initialValue)];
    }

    return initialValue[0];
  };
};


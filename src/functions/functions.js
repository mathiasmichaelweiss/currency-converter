export const getUniqueListBy = (arr, key) => {
  return [...new Map(arr.map(item => [item[key].slice(0, 2), item])).values()];
};

export const getUniqueArrBy = arr => [...new Set(arr)];

export const getDataFromAPI = async (apiKey, link, func) => {
  await fetch(`${link}${apiKey}`)
    .then(responce => responce.json())
    .then(data => func(data));
};

export const dataFilter = (obj, filterType) => {
  let filteredData = [];

  for (let key in obj) {
    if (filterType === 'shortCoutries') {
      const shortKey = key.slice(0, 2);
      filteredData.push(shortKey);
    }
    if (filterType === 'getKeysAndValues') {
      filteredData.push({ name: key, value: obj[key] });
    }
  }

  return filteredData;
};

export const currencyCount = (e, from, to, setFunc) => {
  const conversionalRate = from / to;
  let sum = e.target.value / conversionalRate;
  setFunc(sum.toFixed(2));
};

export const getValueFromObject = (obj, value, setFunc) => {
    for (let key in obj) {
      if (obj[key].name === value) {
        setFunc(obj[key].value);
      }
    }
  };

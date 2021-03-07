export const getActiveEnv = () => {
  if (typeof window !== "undefined") {
    const { hostname } = window.location;
    if (hostname === 'localhost') {
      activeConfig = "prod";
    } else {
      activeConfig = "dev";
    }
    return env;
  }
}

export const getPath = (path = '') => (path ? `/${path}` : '');

export const createUrlParamFromObj = (params = null) => {
  if (!params) return '';
  const result = [];
  Object.keys(params).map(key => result.push(`${key}=${params[key]}`));
  return `?${result.join('&')}`;
};

export const getCustomUrl = (url = '') => url;

export const getContentType = (type = '') => {
  switch (type) {
    case 'form-data':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};


export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value
});

export const SetLocal = (name, data) => localStorage.setItem(name, JSON.stringify(data));

export const GetLocal = query => JSON.parse(localStorage.getItem(query));

export const getYearsList = fromYear => {
  const currentYear = new Date().getFullYear();
  let yearsArray = [];

  for(let year=fromYear; year<=currentYear; year++){
    yearsArray.push(year)
  }
  return yearsArray;
}
export const getCountries = () => {
  return async function (dispatch) {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      if(data !== undefined){
        dispatch({ type: 'GET_COUNTRIES', payload: data });
      }
  };
};

export const getRegionCountries = (region) => {
  return async function (dispatch) {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const data = await response.json();
      if(data !== undefined){
        dispatch({ type: 'COUNTRIES_REGION', payload: data });
      }
  };
};

export const getCountryDetail = (code) => {
  return async function (dispatch) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await response.json();
    if(data !== undefined) {
      dispatch({ type: 'GET_COUNTRY_DETAIL', payload: data[0] });
    }
  };
};

export const getCountryByName = (country) => {
  return async function (dispatch) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await response.json()
    if(data !== undefined) {
      dispatch({type: "GET_COUNTRY_BY_NAME", payload: data})
    }
  }
}

export const cleanDetail = () => ({
  type: 'CLEAN_DETAIL',
})

export const getRegion = (region) => ({
  type: 'GET_REGION',
  payload: region,
});

export const getMovies = () => {
  return async function (dispatch) {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      dispatch({ type: 'GET_MOVIES', payload: data });
  };
};

export const getRegionCountries = (region) => {
  return async function (dispatch) {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const data = await response.json();
      dispatch({ type: 'COUNTRIES_REGION', payload: data });
  };
};

export const getRegion = (region) => ({
  type: 'GET_REGION',
  payload: region,
});

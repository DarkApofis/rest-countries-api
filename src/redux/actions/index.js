export const getMovies = () => {
  return async function (dispatch) {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      dispatch({ type: 'GET_MOVIES', payload: data });
  };
};

export const quitarFav = (id) => ({
  type: 'QUITAR_FAV',
  payload: id,
});

export const addFav = (pelicula) => ({
  type: 'AÑADIR_FAV',
  payload: pelicula,
});

export const detallePelicula = (imdbID) => {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'DETALLE_PELICULA', payload: json });
      });
  };
};
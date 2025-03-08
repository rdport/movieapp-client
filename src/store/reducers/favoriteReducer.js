const initialState = {
  favoriteMovies: []
}

function favoriteReducer( state = initialState, action ) {
  switch(action.type) {
    case 'favorites/addFavoriteMovie':
      return {
        ...state,
        favoriteMovies: [
          action.favoriteMovie,
          ...state.favoriteMovies
        ]
      };
    case 'favorites/deleteFavoriteMovie':
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== action.favoriteMovieId)
      }
    default:
      return state
  }
}

export default favoriteReducer;

const initialState = {
  favoriteMovies: [],
  favScrollPosition: null
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
    case 'home/setFavScrollPosition':
      return { ...state, favScrollPosition: action.favScrollPosition }
    default:
      return state
  }
}

export default favoriteReducer;

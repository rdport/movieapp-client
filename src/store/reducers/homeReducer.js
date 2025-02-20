const initialState = {
  movies: [],
  page: 1,
  totalPages: null,
  isLoading: false,
  movieIsLoaded: false,
  movieError: null
}

function homeReducer( state = initialState, action ) {
  switch(action.type) {
    case 'home/setMovies':
      return { ...state, movies: [...state.movies, ...action.movies] }
    case 'home/setPage':
      return { ...state, page: action.page }
    case 'home/setTotalPages':
      return { ...state, totalPages: action.totalPages }
    case 'home/setIsLoading':
      return { ...state, isLoading: action.isLoading }
    case 'home/setMovieIsLoaded':
      return { ...state, movieIsLoaded: action.movieIsLoaded }
    case 'home/setMovieError':
      return { ...state, movieError: action.movieError }
    case 'home/resetMovies':
      return { ...state, movies: action.movies }
    default:
      return state
  }
}

export default homeReducer;

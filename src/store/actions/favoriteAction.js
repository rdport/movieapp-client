export function addFavoriteMovie(favoriteMovie) {
  return {
    type: "favorites/addFavoriteMovie",
    favoriteMovie
  }
}

export function deleteFavoriteMovie(favoriteMovieId) {
  return {
    type: "favorites/deleteFavoriteMovie",
    favoriteMovieId
  }
}

export const setFavScrollPosition = (favScrollPosition) => {
  return (dispatch, getState) => {
    dispatch({
      type: "home/setFavScrollPosition",
      favScrollPosition
    })
  }
}

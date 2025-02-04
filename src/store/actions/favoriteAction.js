export function addFavoriteId(favoriteId) {
  return {
    type: "favorites/addFavoriteId",
    favoriteId
  }
}

export function deleteFavoriteId(favoriteId) {
  return {
    type: "favorites/deleteFavoriteId",
    favoriteId
  }
}

export const fetchFilteredFavorites = (url) => {
  return (dispatch, getState) => {
    const { favoriteIds } = getState().favoriteReducer;
    const { searchKey } = getState().navbarReducer;
    fetch(url)
      .then(handleResponse)
      .then((data) => {
        if (searchKey !== '') {
          const filtered = data.results.filter((movie) => {
            return (favoriteIds.includes(movie.id) && movie.title.toLowerCase().includes(searchKey.toLowerCase()))
          });
          dispatch({
            type: "favorites/setFilteredFavorites",
            filteredFavorites: filtered
          })
        } else {
          const filtered = data.results.filter((movie) => {
            return (favoriteIds.includes(movie.id))
          });
          dispatch({
            type: "favorites/setFilteredFavorites",
            filteredFavorites: filtered
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: "favorites/setFilteredFavoriteError",
          filteredFavoriteError: error
        })
      })
      .finally(_ => {
        dispatch({
          type: "favorites/setFilteredFavoriteIsLoaded",
          filteredFavoriteIsLoaded: true
        })
      })
  }

  function handleResponse (response) {
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
      return handleJSONResponse(response)
    } else if (contentType.includes('text/html')) {
      return handleTextResponse(response)
    } else {
      throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
  }
  
  function handleJSONResponse (response) {
    return response.json()
      .then(json => {
        if (response.ok) {
          return json
        } else {
          return Promise.reject(Object.assign({}, json, {
            status: response.status,
            statusText: response.statusText
          }))
        }
      })
  }

  function handleTextResponse (response) {
    return response.text()
      .then(text => {
        if (response.ok) {
          return text
        } else {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            err: text
          })
        }
      })
  }
}

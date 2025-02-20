export const fetchMovies = (url) => {
  return (dispatch, getState) => {
    dispatch({
      type: "home/setIsLoading",
      isLoading: true
    })
    fetch(url)
    .then(handleResponse)
    .then((data) => {
      dispatch({
        type: "home/setMovies",
        movies: data.results
      })
      dispatch({
        type: "home/setTotalPages",
        totalPages: data.total_pages
      })
    })
    .catch((error) => {
      dispatch({
        type: "home/setMovieError",
        movieError: error
      })
    })
    .finally(_ => {
      dispatch({
        type: "home/setMovieIsLoaded",
        movieIsLoaded: true
      })
      dispatch({
        type: "home/setIsLoading",
        isLoading: false
      })
    })
  }
}

export const setPage = (page) => {
  return (dispatch, getState) => {
    dispatch({
      type: "home/setPage",
      page
    })
  }
}

export const resetMovies = (movies) => {
  return (dispatch, getState) => {
    dispatch({
      type: "home/resetMovies",
      movies
    })
  }
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

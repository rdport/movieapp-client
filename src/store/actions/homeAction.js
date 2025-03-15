export const fetchMovies = (url, prevMovieIds, type) => {
  return (dispatch, getState) => {
    dispatch({
      type: "home/setIsLoading",
      isLoading: true
    })
    setTimeout(() => {
      fetch(url)
      .then(handleResponse)
      .then((data) => {
        if (type === "searchMovies") {
          dispatch(resetMovies([]));
          dispatch(setPage(1));
        }
        const filteredNewMovieIds = [];
        const filtertedData = data.results.filter(movie => {
          if (!prevMovieIds.includes(movie.id)) {
            filteredNewMovieIds.push(movie.id);
            return movie;
          }
          return false;
        })
        dispatch({
          type: "home/setMovies",
          movies: filtertedData
        })
        dispatch({
          type: "home/setTotalPages",
          totalPages: data.total_pages
        })
        dispatch({
          type: "home/setMovieIds",
          movieIds: filteredNewMovieIds
        })
      })
      .catch((error) => {
        dispatch({
          type: "home/setMovieError",
          movieError: error
        })
        console.log(error)
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
    }, 5000)
   
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

export const resetMovieIds = (movieIds) => {
  return (dispatch, getState) => {
    dispatch({
      type: "home/resetMovieIds",
      movieIds
    })
  }
}

export const setScrollPosition = (scrollPosition) => {
  return (dispatch, getState) => {
    dispatch({
      type: "home/setScrollPosition",
      scrollPosition
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

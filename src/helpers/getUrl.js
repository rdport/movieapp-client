function getURL(page, searchKey) {
    if (searchKey === '') {
      return `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`;
    } else {
      return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchKey.toLowerCase()}&page=${page}&include_adult=false`;
    }
  }

export default getURL;
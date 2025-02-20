import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovies, setPage, resetMovies } from '../store/actions/homeAction';
import { setPath } from '../store/actions/pathAction';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import NoItem from '../components/NoItem';
import Error from '../components/Error';

function Home() {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const searchKey = useSelector(state => state.navbarReducer.searchKey);
  const { movies, page, totalPages, isLoading } = useSelector(state => state.homeReducer);
  const movieIsLoaded = useSelector(state => state.homeReducer.movieIsLoaded);
  const movieError = useSelector(state => state.homeReducer.movieError);
  // const [isInfiniteLoading, setIsInfiniteLoading] = useState(false);
  let url = '';
  if (searchKey === '') {
    url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`;
  } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchKey.toLowerCase()}&page=${page}&include_adult=false`;
  }

  const handleScroll = () => {
    const rootElement = document.documentElement;
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.99) {
      dispatch(setPage(page + 1));
      // setIsInfiniteLoading(true);
      document.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      if (page < totalPages) {
        document.addEventListener('scroll', handleScroll);
      } else {
        document.removeEventListener('scroll', handleScroll);
      }
      // setIsInfiniteLoading(false);
    }
  // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    dispatch(fetchMovies(url));
  },[dispatch, url, searchKey])

  useEffect(() => {
    dispatch(fetchMovies(url));
    dispatch(setPage(1))
    dispatch(resetMovies([]));
    // eslint-disable-next-line
  },[dispatch, searchKey])

  useEffect(() => {
    dispatch(setPath(path));
  },[dispatch, path])

  if (!movieIsLoaded) {
    return <Spinner />
  }
  
  return (
    <>
      {(movieError) && (<Error error={movieError} />)}
      {
        (!movies?.length && !movieError && !isLoading) ? (
          <NoItem text={"No results"}/>
        ) : (
          <>
            <div className="layout-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 ml-2 mr-2 pb-4">
              {
                movies.map((movie) => {
                  return <MovieCard movie={movie} key={movie.id} />
                })
              }
            </div>
            {(isLoading && page !== 1) && (
              <Spinner className="spinner-container-infinite-loading" />
            )}
           </>
        )
      }
    </>
  );

}

export default Home;

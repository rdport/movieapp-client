import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilteredFavorites } from '../store/actions/favoriteAction';
import { useRouteMatch } from 'react-router-dom';
import { setPath } from '../store/actions/pathAction';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import NoItem from '../components/NoItem';
import Error from '../components/Error';

function Favorite() {
  const { path } = useRouteMatch();
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;
  const filteredFavorites = useSelector(state => state.favoriteReducer.filteredFavorites);
  const filteredFavoriteIsLoaded = useSelector(state => state.favoriteReducer.filteredFavoriteIsLoaded);
  const filteredFavoriteError = useSelector(state => state.favoriteReducer.filteredFavoriteError);
  const searchKey = useSelector(state => state.navbarReducer.searchKey);
  const favoriteIds = useSelector(state => state.favoriteReducer.favoriteIds);
  const scrollContainerRef = useRef(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilteredFavorites(url));
  }, [dispatch, url, favoriteIds, searchKey])

  useEffect(() => {
    dispatch(setPath(path));
  },[dispatch, path])

  useEffect(() => {
    // Step 1: Disable scrolling on the root (body or html) element
    document.body.style.overflow = 'hidden';
    // Step 2: Enable scrolling for the ref component
    const container = scrollContainerRef.current;
    if (container) {
      container.style.overflowY = 'auto';  // Enable vertical scrolling
      container.style.height = '90vh';     // Set a height for the scrollable container
    }
    // Clean up the overflow style when the component is unmounted
    return () => {
      document.body.style.overflow = '';   // Restore body overflow
    };
  }, []);

  // if (!filteredFavoriteIsLoaded) {
  //   return <Spinner />
  // }
  
  return (
    <>
      <h1 className="text-center mt-2">Favorite Page</h1>
      {(!filteredFavoriteIsLoaded) && <Spinner />}
      {(filteredFavoriteError) && (<Error error={filteredFavoriteError} />)}
      {(!favoriteIds.length) && (<NoItem text={"No favorites"} />)}
      {(favoriteIds.length !== 0 && !filteredFavorites.length && !filteredFavoriteError) && <NoItem text={"No results"} />}
      {filteredFavorites && (
          <div className="layout-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 ml-2 mr-2">
            {
              filteredFavorites.map((movie) => {
                return <MovieCard movie={movie} key={movie.id} />
              })
            }
          </div>
        )
      }
    </>
  );
}

export default Favorite;

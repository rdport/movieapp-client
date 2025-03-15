import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { setPath } from '../store/actions/pathAction';
import MovieCard from '../components/MovieCard';
import NoItem from '../components/NoItem';
import { setFavScrollPosition } from '../store/actions/favoriteAction';

function Favorite() {
  const { path } = useRouteMatch();
  const { favoriteMovies, favScrollPosition } = useSelector(state => state.favoriteReducer);
  const { favSearchKey } = useSelector(state => state.navbarReducer);
  const [filteredFavoriteMovies, setFilteredFavoriteMovies] = useState(favoriteMovies);
  const scrollContainerRef = useRef(null);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    dispatch(setFavScrollPosition(scrollContainer.scrollTop));
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainerRef.current.scrollTop = favScrollPosition;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    }
  // eslint-disable-next-line
  }, [filteredFavoriteMovies]);

  useEffect(() => {
    dispatch(setPath(path));
  },[dispatch, path])

  useEffect(() => {
    setFilteredFavoriteMovies(favoriteMovies.filter(
      movie => movie.original_title.trim().toLowerCase().includes(favSearchKey.trim().toLowerCase())
    ));
  // eslint-disable-next-line
  },[dispatch, favSearchKey, favoriteMovies])

  useEffect(() => {
    // Step 1: Disable scrolling on the root (body or html) element
    document.body.style.overflow = 'hidden';
    // Step 2: Enable scrolling for the ref component
    const container = scrollContainerRef.current;
    if (container) {
      container.style.overflowY = 'auto';  // Enable vertical scrolling
      container.style.height = '98vh';     // Set a height for the scrollable container
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
      <div ref={scrollContainerRef}> 
        <h1 className="text-center mt-2">Favorite Page</h1>
        {(!favoriteMovies.length) && (<NoItem text={"No favorites"} />)}
        {(favoriteMovies.length !== 0 && !filteredFavoriteMovies.length) && <NoItem text={"No results"} />}
        {filteredFavoriteMovies && (
            <div className="scrollable-container-favorites layout-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ml-2 mr-2">
              {
                filteredFavoriteMovies.map((movie) => {
                  return <MovieCard movie={movie} key={movie.id} />
                })
              }
            </div>
          )
        }
      </div>
    </>
  );
}

export default Favorite;

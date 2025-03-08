import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovies, setPage, setScrollPosition } from '../store/actions/homeAction';
import { setPath } from '../store/actions/pathAction';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import NoItem from '../components/NoItem';
import Error from '../components/Error';
import getURL from '../helpers/getUrl';

function Home() {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const { searchKey } = useSelector(state => state.navbarReducer);
  const { movies, page, totalPages, isLoading, movieIds, scrollPosition } = useSelector(state => state.homeReducer);
  const movieError = useSelector(state => state.homeReducer.movieError);
  // const hasMounted = useRef(false);
  const scrollContainerRef = useRef(null);
  // const [isInfiniteLoading, setIsInfiniteLoading] = useState(false);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const scrollTotal = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    dispatch(setScrollPosition(scrollContainer.scrollTop));
    if (scrollContainer.scrollTop / scrollTotal > 0.99) {
      dispatch(setPage(page + 1));
      scrollContainer.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainerRef.current.scrollTop = scrollPosition;
    if (!isLoading && scrollContainer) {
      if (page < totalPages) {
        scrollContainer.addEventListener('scroll', handleScroll);
      } else {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    }

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    }
  // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    dispatch(fetchMovies(getURL(page, searchKey), movieIds));
    // eslint-disable-next-line
  },[dispatch, page])

  // useEffect(() => {
  //   if (hasMounted.current) {
  //     dispatch(fetchMovies(getURL(1, ""), [], "searchMovies"));
  //     dispatch(setIsHome(false));
  //   } else {
  //     hasMounted.current = true;
  //   }
  //   // eslint-disable-next-line
  // },[dispatch, isHome])

  useEffect(() => {
    dispatch(setPath(path));
  },[dispatch, path])

  // if (!movieIsLoaded) {
  //   return <Spinner />
  // }

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
  
  return (
    <>
      <div ref={scrollContainerRef} className='home-scroll-container'>
      {(isLoading) && (<Spinner />)}
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
      </div>
    </>
  );

}

export default Home;

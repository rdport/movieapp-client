import React, { useEffect, useRef } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieDetail } from '../store/actions/movieDetailAction';
import { setPath } from '../store/actions/pathAction';
import MovieImage from '../components/MovieImage';
import MovieDetailList from '../components/MovieDetailList';
import MovieOverview from '../components/MovieOverview';

function MovieDetail() {
  const { path } = useRouteMatch();
  const movieDetail = useSelector(state => state.movieDetailReducer.movieDetail);
  const dispatch = useDispatch();
  const { MovieId } = useParams();
  const scrollContainerRef = useRef(null);
  
  const url = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=90d4a0880579cc5fa24ef5de07760fd3&language=en-US`;

  useEffect(() => {
    dispatch(fetchMovieDetail(url));
  },[dispatch, url])

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

  return (
    <>
      <div ref={scrollContainerRef} className="row justify-center d-flex align-items-center">
        <div className="col-sm col-md col-lg-4">
          <MovieImage movie={movieDetail} />
        </div>
        <div className="col-sm col-md col-lg-3">
          <MovieDetailList movie={movieDetail} />
        </div>
        <div className="col-sm col-md-12 col-lg-7 mt-2">
          <MovieOverview movie={movieDetail} />
        </div>
      </div>  
    </>
  );
}

export default MovieDetail;


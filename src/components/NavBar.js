import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchKey, setIsShowInfo } from '../store/actions/navbarAction';
import { fetchMovies } from '../store/actions/homeAction';
import { NavLink } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import Info from '../components/Info';
import $ from 'jquery';
import getURL from '../helpers/getUrl';

function NavBar() {
  const [searchKeyNavBar, setSearchKeyNavBar] = useState(useSelector(state=> state.navbarReducer.searchKey));
  const isShowInfo = useSelector(state=> state.navbarReducer.isShowInfo);
  const path = useSelector(state => state.pathReducer.path);
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(searchKeyNavBar, 500);
  const hasMounted = useRef(false);


  function handleInputChange(event) {
    setSearchKeyNavBar(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function goHome() {
    setSearchKeyNavBar('');
  }

  function showInfo() {
    dispatch(setIsShowInfo(true));
  }

  useEffect(() => {
    $('#info-modal').modal('show');
  }, []);

  useEffect(() => {
    if (hasMounted.current) {
      dispatch(setSearchKey(debouncedValue));
      dispatch(fetchMovies(getURL(1, debouncedValue), [], "searchMovies"));
    } else {
      hasMounted.current = true;
    }
   
  }, [dispatch, debouncedValue]);

  useEffect(() => {
    if (isShowInfo) {
      $('#info-modal').modal('show');
    } else {
      $('#info-modal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }
  }, [isShowInfo]);

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="nav-link d-flex align-items-center" exact to="/" onClick={goHome}>
          <img src="/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="movie-app logo" loading="lazy" />
          <div className="brand-name">MOVIE APP</div>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item" onClick={goHome}>
              <NavLink className="nav-link d-flex align-items-center" activeClassName="active" exact to="/">
                <img src="/images/home.svg" width="30" height="30" className="d-inline-block align-top" alt="home logo" loading="lazy" />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-flex align-items-center" activeClassName="active" exact to="/favorites">
                <img src="/images/star.svg" width="30" height="30" className="d-inline-block align-top" alt="favorites logo" loading="lazy" />
                Favorites
              </NavLink>
            </li>
            <li className="nav-item" onClick={showInfo}>
              <div className="nav-link d-flex align-items-center info-tab">
                <img src="/images/info.svg" width="30" height="30" className="d-inline-block align-top mr-1" alt="info logo" loading="lazy" />
                Info
              </div>
            </li>
          </ul>
          { (path === "/favorites" || path === "/") && (
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
              <input className="form-control mr-sm-2" name="searchKey" value={searchKeyNavBar} onChange={handleInputChange} type="search" placeholder="Search by Title" />
            </form>
            )}
        </div>
      </nav>
      {(isShowInfo) && (<Info />)}
    </>
  );
}

export default NavBar;

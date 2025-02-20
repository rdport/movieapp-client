import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsShowInfo } from '../store/actions/navbarAction';

function Info() {
  const dispatch = useDispatch();

  function closeInfo() {
    dispatch(setIsShowInfo(false));
  }

  return (
    <>
       <div className="modal fade" id="info-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
       <div className="modal-dialog" role="document">
          <div className="info-modal-content modal-content">
            <div className="info-modal-header modal-header">
              <h5 className="modal-title" style={{fontWeight:'bold'}} id="exampleModalLongTitle">Welcome to Movie App!</h5>
              <button type="button" onClick={closeInfo} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="info-modal-text-container">
                <h1 className="text-center mb-3">Tech Stack</h1>
                <div className="card-deck row" id="tech-stack-deck">
                  <div className="col-4">
                    <div class="tech-icon-container">
                      <img className="info-card-img" src="/images/HTML5.svg" alt="HTML5"/>
                          <div className="info-card-body">
                            <h5 className="info-card-title card-title text-center">HTML5</h5>
                          </div>
                    </div>  
                  </div>
                  <div className="col-4">
                    <div class="tech-icon-container">
                      <img className="info-card-img" src="/images/CSS3.svg" alt="CSS3"/>
                      <div className="info-card-body card-body">
                        <h5 className="info-card-title card-title text-center">CSS3</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="tech-icon-container">
                      <img className="info-card-img" src="/images/Bootstrap.svg" alt="Bootstrap"/>
                      <div className="info-card-body card-body">
                        <h5 className="info-card-title card-title text-center">Bootstrap</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="tech-icon-container">
                      <img className="info-card-img" src="/images/React.svg" alt="React"/>
                      <div className="info-card-body card-body">
                        <h5 className="info-card-title card-title text-center">React</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="tech-icon-container">
                      <img className="info-card-img" src="/images/Redux.svg" alt="Redux"/>
                      <div className="info-card-body card-body">
                        <h5 className="info-card-title card-title text-center">Redux</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="tech-icon-container">
                      <img className="info-card-img" src="/images/JavaScript.svg" alt="JavaScript"/>
                      <div className="info-card-body card-body">
                        <h5 className="info-card-title card-title text-center">JavaScript</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-description description">
                  <h2>
                    Description
                  </h2>
                  <p>
                    A web application for checking out trending movies using The Movie Database (TMDB) API.
                  </p>
                  <h2>Github</h2>
                  <ul>
                    <li><a href='https://github.com/rdport/movieapp-client.git'>movieapp-client</a></li>
                  </ul>
                  <h2>Features</h2>
                    <ul>
                        <li>Filter movies by title</li>
                        <li>Infinite scrolling</li>
                        <li>Click the images to show more details</li>
                        <li>Add movies to favorites by clicking the empty star icons</li>
                        <li>Remove movies from favorites by clicking the red star icons</li>
                        <li>Responsive design enables this website to adapt to the size of the screen</li>
                    </ul>
                    <h2>P.S.</h2>
                    <ul>
                      <li>For the purpose of prototyping, authentication and database are not used so all movies in favorites will not persist when the website reloads.</li>
                      <li>Please check out the "Fancytodo" project which has implemented more advanced authentication with secure access token, csrf token and refresh token.</li>
                      <li><a href="https://github.com/rdport/fancytodo-client">fancytodo-client on github</a>, <a href="https://github.com/rdport/fancytodo-server">fancytodo-server on github</a>, <a href="https://fancytodo-client.onrender.com">Fancytodo website</a></li>
                      <li>This project is using free tier hosting and API services so this website might not be always accessible.</li>
                    </ul>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button"onClick={closeInfo} className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Info;

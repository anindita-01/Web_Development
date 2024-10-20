import React from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types';


export default function Navbar({title="add title", about,mode,toggleMode}) {
  return (
            <div>
                 <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                    <a className="navbar-brand" href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">{about}</a>
                        </li>
            
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
          <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </nav>
            </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};



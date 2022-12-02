import React from 'react'
// import cglogo from '../../images/cg-logo.png'
import './Header.css'
function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark" aria-label="navbar">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">iEval</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-md-center" id="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Task</a>
          </li>
        </ul>
      </div>
      <button className="btn prop btn-outline-light">
            <i className="fa fa-user"> </i> &nbsp; Log Out
      </button>
    </div>
  </nav>
  </>
    
  )
}

export default Header
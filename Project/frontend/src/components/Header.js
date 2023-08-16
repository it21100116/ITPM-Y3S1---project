import React from 'react'
import useAuth from '../hooks/useAuth'

function Header() {
  //auth
  const { auth } = useAuth()

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Top Navigation Start */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-light"
        style={{ backgroundColor: '#009688' }}
      >
        <a
          className="navbar-brand"
          href="/AdminPanel"
          style={{ color: 'black', fontWeight: 'bold' }}
        >
          Zoo management system
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: 'black' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/attemptquestion"
                style={{ color: 'black' }}
              >
                Take a Quiz
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/events" style={{ color: 'black' }}>
                <span className="sr-only">(current)</span>Events
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            { auth.user?(
            <li className="nav-item active">
              <a
                className="nav-link"
                href="/userprofile/"
                style={{ color: 'black' }}
              >
                <span className="sr-only">(current)</span>{ auth.user }
              </a>
            </li> ):
            <li className="nav-item active">
              <a className="nav-link" href="/signin" style={{ color: 'black' }}>
                <span className="sr-only">(current)</span>Sign In
              </a>
            </li> }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css'
import { withRouter } from 'react-router-dom'

const Navbar = (props) => {

  if (props.loggedIn) {
    return (
      <div className="nav-container">
        <div className="nav-button">
          <Link to='/home'>
            Roomies
          </Link>
        </div>

        <div
        className="nav-button nav-button-settings">
        <Link to="/user-settings">
          User Settings
        </Link>
        </div>

        <div onClick={props.handleLogout}
        className="nav-button nav-button-logout">
        <Link to="/homepage">
          Logout
        </Link>
        </div>

      </div>
    )
  } else {
    return (
      <div className="nav-container">
          <div className="nav-button">
            <Link to='/landing'>
              Roomies
            </Link>
          </div>
          <Fragment>
          <div className="nav-button nav-button-signup">
            <Link to='/sign-up'>
              Sign Up
            </Link>
          </div>
          <div className="nav-button nav-button-login">
            <Link to='/login'>
              Login
            </Link>
          </div>
          </Fragment>
          <div className="nav-button nav-button-about">
            <Link to='/about'>
              About
            </Link>
          </div>

      </div>
    )
  }
}

export default withRouter(connect()(Navbar))

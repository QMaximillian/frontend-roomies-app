import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css'
import { withRouter } from 'react-router-dom'

const Navbar = (props) => {


  return (
    <div className="nav-container">
        <div className="nav-button">
          <Link to='/homepage'>
            Roomies
          </Link>
        </div>
        {props.loggedIn ?
          <Fragment>
          <div onClick={props.handleLogout}
          className="nav-button nav-button-logout">
          <Link to="/homepage">
            Logout
          </Link>
          </div>
          </Fragment>
          :
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
        }
        <div className="nav-button nav-button-about">
          <Link to='/about'>
            About
          </Link>
        </div>

    </div>
  )
}

export default withRouter(connect()(Navbar))

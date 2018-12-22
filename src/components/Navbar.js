import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css'

const Navbar = (props) => {

  return (
    <div className="nav-container">
        <div className="nav-button">
          <Link to='/homepage'>
            Roomies
          </Link>
        </div>
        <div className="nav-button nav-button-signup">
          <Link to='/sign-up'>
            Sign Up
          </Link>
        </div>
        {props.loggedIn ?
          <div></div>
          :
        <Fragment>
        <div className="nav-button nav-button-login">
          <Link to='/login'>
            Login
          </Link>
        </div>
        <div className="nav-button nav-button-about">
          <Link to='/about'>
            About
          </Link>
        </div>
    </Fragment> }
    </div>
  )
}

export default connect()(Navbar)

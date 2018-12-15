import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css'

const Navbar = (props) => {
  console.log(props)
  return (

      <ul className='navbar'>
        <li >
          <Link to='/login'>
            Login
          </Link>
        </li>
        <li>
          <Link to='/homepage'>
            Roomies
          </Link>
        </li>
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
      </ul>

  )
}

export default connect()(Navbar)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import withAuth from '../hocs/withAuth'
import { withRouter } from "react-router";
import { createAndLoadUserHome } from '../actions/index.js'
// import moment from 'moment'

class HomeContainer extends Component {
   render() {

     return (
        <div className="home-container">
          <div> Your Tasks </div>
          <div> Split Tasks </div>

        </div>
     )
   }
 }

export default withRouter(withAuth(connect(state => ({currentHome: state.currentHome }))(HomeContainer)))

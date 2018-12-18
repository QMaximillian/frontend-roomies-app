import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../App.css'
import { fetchCreateHome } from '../adapters/index.js'

class HouseCreateForm extends Component {

  state = {
    // TODO:
      // Structure home state with correct params for Rails API
      // Check roomates to see if any other users exist with those emails. Ask them if they want to join the house
      // When they agree add a home_id to associate them to a house
      // Clean up the CSS and form submit page for creating a house
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }


   render() {
     return (
      <Fragment>
        <label
          id="label-center"
          >Create Your House
        </label>
          <form
            onChange={this.handleChange}
            className="house-form">
            <label
              id="house-item-label1"
              >Roomate E-Mail
            </label>
            <input
              name="roomate1email"
              className="house-item .house-item1"/>
            <label
              id="house-item-label2">Roomate E-Mail
            </label>
            <input
              name="roomate2email"
              className="house-item2 house-item"/>
            <label>Roomate E-Mail</label>
            <input
              name="roomate3email"
              className="house-item3 house-item"/>
            <label>House Name</label>
            <input
              name="houseName"
              className="house-item4 house-item"/>
            <label>House Address</label>
            <input
              name="houseAddress"
              className="house-item5 house-item"/>

            <button
              className="house-item house-submit"
              onClick={(e) => fetchCreateHome(e)}>Submit</button>
          </form>
      </Fragment>
     )
   }
 }

 export default withRouter(connect()(HouseCreateForm))

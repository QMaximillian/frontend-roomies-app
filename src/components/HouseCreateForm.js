import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../App.css'
import { fetchCreateHome } from '../adapters/index.js'

class HouseCreateForm extends Component {

  state = {

    home: {
      house_number: "",
      house_address: "",
      city: "",
      state: "",
      zip_code: 0
    },
    roomate_emails: {
      email1: "",
      email2: ""
    }
    // TODO:
      // Structure home state with correct params for Rails API
      // Check roomates to see if any other users exist with those emails. Ask them if they want to join the house
      // When they agree add a home_id to associate them to a house
      // Clean up the CSS and form submit page for creating a house
  }

  handleHomeChange = (e) => {
    e.persist()
    this.setState(prevState => {
      return {
          home: {
            ...prevState.home,
            [e.target.name]: e.target.value
          }
        }
      }, () => console.log(this.state))
  }


   render() {
     const homeParams = {home: this.state.home}
     return (
      <Fragment>
        <label
          id="label-center"
          >Create Your House
        </label>
          <form
            onChange={this.handleHomeChange}
            className="house-form">

            <label>House Number</label>
            <input
              name="house_number"
              className="house-item"/>

            <label>St., Ave., etc.</label>
            <input
              name="house_address"
              className="house-item"/>

            <label>City</label>
            <input
              name="city"
              className="house-item"/>

            <label>State</label>
            <input
              name="state"
              className="house-item"/>

            <label>Zip Code</label>
            <input
              name="zip_code"
              className="house-item"/>

          </form>


          {/* <form>
            <label
              id="house-item-label1"
              >Roomate E-Mail
            </label>
            <input
              name="email1"
              className="house-item .house-item1"/>
            <label
              id="house-item-label2">Roomate E-Mail
            </label>
            <input
              name="email2"
              className="house-item"/>
            <label>Roomate E-Mail</label>
            <input
              name="roomate3email"
              className=" house-item"/>
          </form> */}







            <button
              className="house-item house-submit"
              onClick={(e) => fetchCreateHome(e, homeParams)}>Submit</button>

      </Fragment>
     )
   }
 }

 export default withRouter(connect()(HouseCreateForm))

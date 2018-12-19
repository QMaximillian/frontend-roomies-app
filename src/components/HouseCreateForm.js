import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../App.css'
import { fetchCreateHome } from '../adapters/index.js'

class HouseCreateForm extends Component {

  state = {

    home: {
      home_number: "",
      home_address: "",
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


  handleRoomateEmail = (e) => {
    this.setState({
      roomate_emails: {
        ...this.state.roomate_emails,
        [e.target.name]: e.target.value
      }
    }, () => console.log(this.state))
  }


  alertPossibleRoomate = () => {

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
            <div className="house-item 1">
              <label>House Number</label>
              <input
                name="home_number"
                />
            </div>

            <div className="house-item 2">
              <label>St., Ave., etc.</label>
              <input
                name="home_address"/>
            </div>

            <div className="house-item 3">
              <label>City</label>
              <input
                name="city"/>
            </div>

            <div className="house-item 5">
              <label>State</label>
              <input
                name="state"/>
            </div>

            <div className="house-item">
              <label>Zip Code</label>
              <input
                name="zip_code"/>
            </div>
            <button
              className="house-item house-submit"
              onClick={(e) => fetchCreateHome(e, homeParams).then(console.log)}>Submit
            </button>
          </form>


          <form
            onChange={this.handleRoomateEmail}>
            <div>
              <label>Roomate E-Mail</label>
              <input
                name="email1"
                className="house-item .house-item1"/>
            </div>
            <button
              onClick={() => this.alertPossibleRoomate()}></button>

            {/*}<div>
              <label>Roomate E-Mail</label>
              <input
                name="email2"
                className="house-item"/>
            </div>

            <div>
              <label>Roomate E-Mail</label>
              <input
                name="roomate3email"
                className=" house-item"/>
            </div>*/}
          </form>









      </Fragment>
     )
   }
 }

 export default withRouter(connect()(HouseCreateForm))

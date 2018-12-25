import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../App.css'
import { createAndLoadHouse } from '../actions/index.js'
import withAuth from '../hocs/withAuth'


class HouseCreateForm extends Component {

  state = {

    home: {
      home_number: "",
      home_address: "",
      city: "New York City",
      state: "New York",
      zip_code: 0
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
      })
  }

  handleRoomateEmail = (e) => {
    this.setState({
      roomate_emails: {
        ...this.state.roomate_emails,
        [e.target.name]: e.target.value
      }
    })
  }

  handleHouseCreate = (event, params, id) => {
    event.preventDefault()
    this.props.createAndLoadHouse(params, id)

    this.props.handleCreated('add-roomates')

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
              <select
                name="city"
                defaultValue={this.state.home.city}>
              <option value="New York City">New York City</option>
                </select>
            </div>

            <div className="house-item 5">
              <label>State</label>
              <select
                name="state">
                <option
                  name="state"
                  defaultValue={this.state.home.state}>
                New York
                </option>
                </select>
            </div>

            <div className="house-item">
              <label>Zip Code</label>
              <input
                name="zip_code"/>
            </div>

            <button
              className="house-item house-submit"
              onClick={(event) => this.handleHouseCreate(event, homeParams, this.props.currentUser.id)}>Submit
            </button>
          </form>
      </Fragment>
     )
   }
 }

 export default connect(state => ({ currentUser: state.currentUser }), { createAndLoadHouse })(HouseCreateForm)

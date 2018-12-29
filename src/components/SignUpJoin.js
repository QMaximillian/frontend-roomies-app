import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { loadHouse } from '../actions/index.js'
import { Redirect } from 'react-router-dom'

class SignUpJoin extends Component {

  state = {
    create: false,
    join: false,
    home_uuid: ''
  }

  componentDidUpdate() {
    if (this.state.create) {
      this.props.history.push('/create')
    }

    if (this.state.join) {
      this.props.history.push('/join')
    }
  }

  handleChange = (e) => {
    this.setState({
          [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  handleHouseJoin = () => {

    this.props.loadHouse(this.state.home_uuid, this.props.currentUser.id)

    this.props.history.push('/home')

   //  fetchGetHome(this.state.home_uuid).then(resp => {
   //     fetchCreateUserHome(this.props.currentUser.id, resp.id)
   //     return <Redirect to="homepage"/>
   // })
  }

 render() {


     return (
        <div>
      <button
          onClick={() => this.setState({create: true})}
        >Create a House
        </button>
        <br />
        <label>Join a House</label>
        <input
          name='home_uuid'
          onChange={this.handleChange}
          value={this.state.home_uuid}
          />
        <button
          onClick={() => this.handleHouseJoin()}
        >Join a House
        </button>
        </div>
     )
   }
}


export default withRouter(connect(state => ({currentUser: state.currentUser }), { loadHouse })(SignUpJoin))

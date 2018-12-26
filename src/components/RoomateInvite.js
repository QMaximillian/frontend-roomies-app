import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { fetchSendEmail } from '../adapters/index'
import { connect } from 'react-redux'
import { fetchSendInviteEmail } from '../adapters/index.js'

class RoomateInvite extends Component {

    state = {
        email: ''
    }

    handleEmail = (e) => {
      this.setState({
          email: e.target.value,
      }, () => console.log(this.state))
    }

    sendEmail = (e, params) => {
      e.preventDefault()
      fetchSendInviteEmail(params)
      this.props.handleCreated('rules')
    }

   render() {

     const inviteEmailParams = {invite_email: { home_code: this.props.currentHome.home_code,
     first_name: this.props.currentUser.first_name,
     last_name: this.props.currentUser.last_name,
      sender_id: this.props.currentUser.id,
    email: this.state.email}}

     console.log(inviteEmailParams)
     return (
        <div>
          <input onChange={this.handleEmail}>
          </input>
          <button onClick={(e) => this.sendEmail(e, inviteEmailParams)}>Submit</button>
        </div>
     )
   }
 }

 export default withRouter(connect(state => ({currentUser: state.currentUser, currentHome: state.currentHome }))(RoomateInvite))

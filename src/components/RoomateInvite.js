import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { fetchSendEmail } from '../adapters/index'


class RoomateInvite extends Component {

    state = {
      email: ''
    }

    handleEmail = (e) => {
      this.setState({
        email: e.target.value
      }, () => console.log(this.state))
    }

    sendEmail = () => {
      this.props.handleCreated('rules')
    }

   render() {
     return (
        <div>
          <input onChange={this.handleEmail}>
          </input>
          <button onClick={this.sendEmail}>Submit</button>
        </div>
     )
   }
 }

 export default withRouter(RoomateInvite)

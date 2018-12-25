import HouseCreateForm from '../components/HouseCreateForm'
import RoomateInvite from '../components/RoomateInvite'
import withAuth from '../hocs/withAuth'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Rules from '../components/Rules'

import React, { Component } from 'react'

class HouseCreateContainer extends Component {

  state = {
    created: 'house-create'
  }


  handleCreated = (pushVal) => {
    this.setState({
      created: pushVal
    })
  }

   render() {

     if (this.state.created === 'house-create') {
       return (
        <div>
          <HouseCreateForm handleCreated={this.handleCreated} />
        </div>
        )
      } else if (this.state.created === 'add-roomates'){
        return (
          <RoomateInvite handleCreated={this.handleCreated} />
        )
      } else if (this.state.created === 'rules') {
        return <Rules />
      }
   }
 }

 export default withAuth(withRouter(HouseCreateContainer))

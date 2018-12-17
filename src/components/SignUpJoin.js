import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class SignUpJoin extends Component {

  state = {
    create: false,
    join: false
  }

  componentDidUpdate() {
    if (this.state.create) {
      this.props.history.push('/create')
    }

    if (this.state.join) {
      this.props.history.push('/join')
    }
  }

 render() {


     return (
        <div>
        <button
          onClick={() => this.setState({create: true})}
        >Create a House
        </button>

        <button
          onClick={() => this.setState({join: true})}
        >Join a House
        </button>
        </div>
     )
   }

}


export default withRouter(connect()(SignUpJoin))

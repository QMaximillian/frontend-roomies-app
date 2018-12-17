import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

class SignUp extends Component {

    state = {
      submitted: false
    }

    componentDidUpdate() {
      if (this.state.submitted) {
        this.props.history.push('/signedup')
      }
    }

   render() {
       return (
          <button
            onClick={() => {this.setState({submitted: true})}}>Submit Me
          </button>
       )
     }
 }

 export default withRouter(connect()(SignUp))

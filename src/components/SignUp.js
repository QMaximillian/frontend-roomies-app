import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

class SignUp extends Component {

    state = {
      signedUp: false
    }

    componentDidUpdate() {
      if (this.state.signedUp) {
        this.props.history.push('/homepage')
      }
    }

   render() {
     console.log(this.props);

     return (

        <div>
        <button
         onClick={() => this.setState({
           signedUp: true
         }, () => console.log(this.state.signedUp))
         }>
        </button>

        </div>
     )
   }
 }

 export default withRouter(connect()(SignUp))

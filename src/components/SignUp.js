import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { fetchCreateUser } from '../adapters/index.js'
class SignUp extends Component {

    state = {
      submitted: false,
      user: {
        name: '',
        email: '',
        password: '',
        age: ''
      }
    }

    componentDidUpdate() {
      if (this.state.submitted) {
        this.props.history.push('/signedup')
      }
    }

    handleChange = (e) => {
      e.persist()

      this.setState(prevState => {
      return {
          user: {
            ...prevState.user,
          [e.target.name]: e.target.value
        }
      }
    })
    }

    handleSignUp = (e) => {
      e.preventDefault()
      fetchCreateUser({user: this.state.user}).then(console.log)
      this.setState({
        submitted: true
      })
    }





     render() {
       return (
          <form
            onChange={this.handleChange}>
            <div>
              <label>Email</label>
              <input
                name='email'/>
            </div>
            <div>
              <label>Password</label>
              <input
                name='password'/>
            </div>
            <button
              onClick={(e) => this.handleSignUp(e)}>Submit Me
            </button>
          </form>
       )
     }
    }

 export default withRouter(connect()(SignUp))

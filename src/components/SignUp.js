import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { loadInitialUserState } from '../actions/index.js'
import { fetchCreateUser } from '../adapters/index.js'

class SignUp extends Component {

    state = {
      redirect: false,
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        age: ''
      }
    }

    componentDidUpdate() {
      if (this.state.redirect) {
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

    handleSignUp = (e, body) => {
      e.preventDefault()
      fetchCreateUser(body)
      .then(resp => {
        console.log(resp)
        localStorage.setItem('token', resp.user.jwt)
      this.props.loadInitialUserState(resp.user.id)
      this.setState({redirect: true})
    })
    }





     render() {
       return (
          <form
            onChange={this.handleChange}>
            <div>
              <label>First Name</label>
              <input
                name='first_name'/>
            </div>
            <div>
              <label>Last Name</label>
              <input
                name='last_name'/>
            </div>
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
              onClick={(e) => this.handleSignUp(e, {user: this.state.user})}>Submit Me
            </button>
          </form>
       )
     }
    }

 export default withRouter(connect(state => ({ currentUser: state.currentUser }), { loadInitialUserState })(SignUp))

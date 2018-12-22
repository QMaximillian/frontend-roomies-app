import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLoginActor } from '../adapters/index.js'
import { withRouter } from 'react-router-dom'
import { loadInitialUserState } from '../actions/index.js'

class Login extends Component {

  state = {
    user: {
      email: '',
      password: ''
    }
  }

  componentDidUpdate(){
    if (this.props.loggedIn) {
     return this.props.history.push('/roomie-home')
   }
  }

  handleSignIn = (e) => {
    e.preventDefault()
    fetchLoginActor(this.state).then(resp => {
      this.props.handleLoginUser(resp.user)
      this.props.loadInitialUserState(resp.user.id)
      localStorage.setItem('token', resp.user.jwt)
    })
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    },() => console.log(this.state))
  }

   render() {
     console.log(this.props)
     return (
        <div>
        <form
          onChange={this.handleChange}>
          <div>
            <label>Email</label>
            <input
              name='email'
              value={this.state.email}/>
          </div>
          <div>
            <label>Password</label>
            <input
              name='password'
              value={this.state.password}/>
          </div>
          <button
            onClick={(e) => this.handleSignIn(e)}>Submit Me
          </button>
        </form>
        </div>
     )
   }
 }

 export default connect(state => ({ currentUser: state.currentUser }), { loadInitialUserState })(Login)

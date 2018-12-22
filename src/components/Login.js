import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLoginUser } from '../adapters/index.js'
import { withRouter } from 'react-router-dom'
import { loadInitialUserState } from '../actions/index.js'

class Login extends Component {

  state = {
    redirect: false,
    user: {
      email: '',
      password: ''
    }
  }

  componentDidUpdate(){
    if (this.state.redirect) {
     return this.props.history.push('/roomie-home')
   }
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    fetchLoginUser(this.state)
    .then(resp => {
      localStorage.setItem('token', resp.user.jwt)
      this.props.loadInitialUserState(resp.user.id)
      this.setState({ redirect: true})
    })
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

   render() {

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
            onClick={(e) => this.handleLoginSubmit(e)}>Submit Me
          </button>
        </form>
        </div>
     )
   }
 }

 export default connect(state => ({ currentUser: state.currentUser }), { loadInitialUserState })(Login)

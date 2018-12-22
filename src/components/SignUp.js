import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { fetchCreateUser } from '../adapters/index.js'
import { loadInitialUserState } from '../actions/index.js'

class SignUp extends Component {

    state = {
      redirect: false,
      user: {
        name: '',
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

    handleSignUp = (e) => {
      e.preventDefault()
      fetchCreateUser({user: this.state.user}).then(resp =>
      this.props.loadInitialUserState(resp.id))
      .then(this.setState({
          redirect: true
      })
    )
    }





     render() {
       console.log(this.props)
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

 export default withRouter(connect(state => ({ currentUser: state.currentUser }), { loadInitialUserState })(SignUp))

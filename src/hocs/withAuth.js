import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      console.log(this.props)
      if (this.props.loggedIn) {
        return <WrappedComponent {...this.props}/>
      } else if (localStorage.getItem('token')) {
        return <div> Loading </div>
      } else {
      return <Redirect to='/homepage' />
    }
  }
}
}

export default withAuth

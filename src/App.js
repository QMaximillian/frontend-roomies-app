import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import LandingContainer from './containers/LandingContainer'
import TaskVoteContainer from './containers/TaskVoteContainer'
import UserSettingsContainer from './containers/UserSettingsContainer'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { withRouter } from "react-router";
import SignUpJoin from './components/SignUpJoin'
import HouseCreateContainer from './containers/HouseCreateContainer'
import { loadInitialUserState, logoutUserState } from './actions/index.js'
import { fetchReauthUser } from './adapters/index.js'


class App extends Component {

  state = {
    auth: {
      user : {}
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      fetchReauthUser()
      .then(resp =>  this.props.loadInitialUserState(resp.user.id))
    }
  }


  handleLoginUser = (user) => {
    const newAuth = {
        ...this.state.auth,
        user: user
    }

    this.setState({
      auth: newAuth
    })

    localStorage.setItem('token', this.state.auth.user.jwt)
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.logoutUserState()
    return this.props.history.push('/landing')
  }

  render() {

    const loggedIn = !!this.props.currentUser.id
    console.log(loggedIn)
    return (
      <div>
      <Navbar
        loggedIn={loggedIn}
        handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path="/landing" render={(props) => <LandingContainer {...props}/>}/>
          <Route exact path="/sign-up" render={(props) => <SignUp {...props}/>}/>
          <Route exact path="/login" render={(props) => <Login handleLoginUser={this.handleLoginUser} {...props}/>}/>
          <Route exact path="/signedup" render={(props) => <SignUpJoin {...props}/>}/>
          <Route exact path="/create" render={(props) => <HouseCreateContainer loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/home" render={(props) => <HomeContainer loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/user-settings" render={(props) => <UserSettingsContainer loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/task-vote" render={(props) => <TaskVoteContainer loggedIn={loggedIn} {...props}/>}/>
        </Switch>
      </div>

    )
  }
}

export default withRouter(connect(state => ({ currentUser: state.currentUser }), { loadInitialUserState, logoutUserState })(App))

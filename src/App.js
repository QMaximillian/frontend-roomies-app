import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { withRouter } from "react-router";
import SignUpJoin from './components/SignUpJoin'
import HouseCreateForm from './components/HouseCreateForm'
import { loadInitialUserState } from './actions/index.js'
class App extends Component {

  state = {
    auth: {
      currentUser : {}
    }
  }

  handleLoginUser = (user) => {
    const newAuth = {
        ...this.state.auth,
        currentUser: user
    }

    this.setState({
      auth: newAuth
    })
  }


  render() {
    const loggedIn = !!this.state.auth.currentUser.id

    return (
      <div>
      <Navbar/>
        <Switch>
          <Route exact path="/homepage" render={(props) => <HomeContainer {...props}/>}/>
          <Route exact path="/sign-up" render={(props) => <SignUp {...props}/>}/>
          <Route exact path="/login" render={(props) => <Login handleLoginUser={this.handleLoginUser} loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/signedup" render={(props) => <SignUpJoin {...props}/>}/>
          <Route exact path="/create" render={(props) => <HouseCreateForm loggedIn={loggedIn} {...props}/>}/>
        </Switch>
      </div>

    )
  }
}

export default withRouter(connect(null, { loadInitialUserState })(App))

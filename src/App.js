import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { withRouter } from "react-router";

class App extends Component {

  render() {
    return (
      <div>
      <Navbar/>
        <Switch>
          <Route exact path="/homepage" render={(props) => <HomeContainer {...props}/>}/>
          <Route exact path="/sign-up" render={(props) => <SignUp {...props}/>}/>
          <Route exact path="/login" render={(props) => <Login {...props}/>}/>
        </Switch>
      </div>

    )
  }
}

export default withRouter(connect()(App))

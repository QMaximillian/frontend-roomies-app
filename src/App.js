import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import HomeContainer from './containers/HomeContainer'

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
      <Route exact path="/homepage" render={(props) => <HomeContainer/>}/>
      </Switch>
      </div>

    )
  }
}

export default connect()(App)

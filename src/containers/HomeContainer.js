import React, { Component } from 'react'
import { connect } from 'react-redux'


class HomeContainer extends Component {
   render() {
     return (
        <div>
          HomeContainer
        </div>
     )
   }
 }

export default connect()(HomeContainer)

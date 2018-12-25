import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";


class LandingContainer extends Component {
   render() {
     return (
        <div>

        </div>
     )
   }
 }

 export default withRouter( connect()(LandingContainer))

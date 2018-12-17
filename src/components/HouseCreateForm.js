import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../App.css'

class HouseCreateForm extends Component {
   render() {
     return (
        <div className="house-create-form-grid">
          <div>
          Hello
          </div>
        </div>
     )
   }
 }

 export default withRouter(connect()(HouseCreateForm))

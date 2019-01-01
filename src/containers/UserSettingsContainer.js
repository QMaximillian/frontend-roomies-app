import React, { Component } from 'react'

export default class UserSettingsContainer extends Component {

  state = {
    'house-code': ''
  }


   render() {
     return (
        <div>
          UserSettingsContainer
          <label>House Code</label>
          <input
            name="house-code">
          </input>
        </div>
     )
   }
 }

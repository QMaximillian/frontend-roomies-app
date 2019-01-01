import React, { Component } from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadHouseTasks } from '../actions/index.js'

class TaskVoteContainer extends Component {


   render() {
     if (moment('12/31/2018', "MM/DD/YYYY").isBetween(moment('12/30/2018', "MM/DD/YYYY"), moment('01/01/2019', "MM/DD/YYYY"))) {
       return (<div>
         HEllo
               </div>)
     } else {
       return (
          <div>
            TaskVoteContainer
          </div>
       )
     }


   }
 }

 export default withRouter(connect(null, { })(TaskVoteContainer))

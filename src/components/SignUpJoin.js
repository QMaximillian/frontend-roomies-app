import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class SignUpJoin extends Component {

  state = {
    create: false,
    join: false,
    house_code: ''
  }

  componentDidUpdate() {
    if (this.state.create) {
      this.props.history.push('/create')
    }

    if (this.state.join) {
      this.props.history.push('/join')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

 render() {
     return (
        <div>
      <button
          onClick={() => this.setState({create: true})}
        >Create a House
        </button>
        <br />
        <label>Join a House</label>
        <input
          name='house_code'
          onChange={this.handleChange}
          value={this.state.house_code}
          />
        <button
          onClick={() => this.setState({join: true})}
        >Join a House
        </button>
        </div>
     )
   }

}


export default withRouter(connect()(SignUpJoin))

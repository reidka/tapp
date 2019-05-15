import React from "react"
import { mockAuthenticate } from "../actions"
import { connect } from "react-redux"

class MockAuthenticate extends React.Component {



  state = {utorid: ''}

  handleChange = (event) => {
    this.setState({utorid: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.utorid)
    // mockAuthenticate('test')
    this.props.mockAuthenticate(this.state.utorid)

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>HELLO, YOU ARE LOGGED IN AS: {this.props.user_type}</h1>
        <div>
          <label>Username</label>
          <input value={this.state.utorid} onChange={this.handleChange}></input>
        </div>
        <button type='submit'>Get Token</button>
      </form>
    )
  }

}

export default connect(
  ({ auth: { user_type }}) => ({user_type}), {mockAuthenticate}
)(MockAuthenticate)
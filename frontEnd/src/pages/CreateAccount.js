import React, { Component } from 'react'
import SignUp from '../Components/SignUp';
import Header from '../Components/Header'

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <SignUp/>
      </React.Fragment>
    )
  }
}
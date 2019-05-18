import React, { Component } from 'react'
import SignIn from '../Components/SignIn';
import Header from '../Components/Header'

export default class Login extends Component {
  render() {
    return (
        <React.Fragment>
            <Header/>
            <SignIn/>
        </React.Fragment>
    )
  }
}
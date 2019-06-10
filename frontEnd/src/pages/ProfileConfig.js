import React, { Component } from 'react'
import Profile from '../Components/Profile';
import Header from '../Components/Header'

export default class Login extends Component {
  render() {
    return (
        <React.Fragment>
            <Header/>
            <Profile/>
        </React.Fragment>
    )
  }
}
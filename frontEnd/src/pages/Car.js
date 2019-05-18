import React, { Component } from 'react'
import ShopCar from '../Components/ShopCar';
import Header from '../Components/Header'

export default class Login extends Component {
  render() {
    return (
        <React.Fragment>
            <Header/>
            <ShopCar/>
        </React.Fragment>
    )
  }
}
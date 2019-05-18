import React, { Component } from 'react'
import Header from '../Components/Header'
import Galeria from '../Components/Galeria'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Galeria/>
      </React.Fragment>
    )
  }
}

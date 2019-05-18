import React, { Component } from 'react'

export default class Prueba extends Component {
    traemeTodoDelBack=()=>{
        fetch('http://localhost:5000').then()
    }
  render() {
    return (
      <div>
        Hola perrillo
      </div>
    )
  }
}


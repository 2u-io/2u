import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../Components/Header'
import Galeria from '../Components/Galeria'
import axios from 'axios'

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state={
          productos:[]
        }
    }
    

    async componentDidMount(){
        const resp = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
        this.setState({
          productos:resp.data
        })
    }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Galeria/>
        <div>
            <h1>
                Welcome to 2U
            </h1>
        </div>
        <div>
            <h2>
                Steps
            </h2>
        </div>

        <Link to='/catalogo' className='btn'>Empezar</Link>
      </React.Fragment>
    )
  }
}

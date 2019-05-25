import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../Components/Header'
import Galeria from '../Components/Galeria'
import axios from 'axios';
import regalo from '../Components/image/new-product.png';
import tienda from '../Components/image/retail.png';
import mapa from '../Components/image/map-location.png';
import present from '../Components/image/present.png';


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
        <div className='welcome row'>
            <div className="center-align">
                <h1>
                    Welcome to 2U
                </h1>
            </div>
        </div>
        <div className="iconos">
          <div className="regalo">
          <img src={regalo} alt="" className="iconosSection"/>
          <p className="subtitle">Choose your gifts</p>
          </div>
          <div className="regalo">
          <img src={tienda} alt="" className="iconosSection"/>
          <p className="subtitle">Choose your gifts</p>
          </div>
          <div className="regalo">
          <img src={mapa} alt="" className="iconosSection"/>
          <p className="subtitle">Choose your gifts</p>
          </div>
          <div className="regalo">
          <img src={present} alt="" className="iconosSection"/>
          <p className="subtitle">Choose your gifts</p>
          </div>
            
        </div>

        <Link to='/catalogo' className='btn'>Empezar</Link>
      </React.Fragment>
    )
  }
}

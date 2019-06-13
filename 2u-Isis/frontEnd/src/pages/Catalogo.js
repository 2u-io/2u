import React, { Component } from 'react'
import axios from 'axios'
import Loading from '../Components/Loading'
import {Button} from 'react-materialize'

export default class Catalogo extends Component {
    constructor(props){
        super(props);
        this.state={
          productos:[],
          loading:true
        }
    }
    

    async componentDidMount(){
        const resp = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
        this.setState({
          productos:resp.data,
          loading:false
        })
    }

    desplegarProductos = () => (
        this.state.productos.map(producto=>(
          <div key={producto.id}>
                <div className="col s6 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={producto.url} alt='productos'/>
                        </div>
                        <div className="card-content">
                          <span className="card-title">{producto.title}</span>
                        </div>
                        <div className="card-action">
                          <Button 
                            waves="light" 
                            node="a"
                            href='http://localhost:3000/gifts/:id'>
                              Details
                          </Button>
                        </div>
                    </div>
                </div>
            <br/>
          </div>
        ))
    )

    render() {
        if(this.state.loading===true){
            return  <Loading/>
        }
    return (
      <div className="row">
          {this.desplegarProductos()}
      </div>
    )
  }
}

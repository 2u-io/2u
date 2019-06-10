import React, { Component } from 'react'
import Header from '../Components/Header'
import axios from 'axios'
import Loading from '../Components/Loading'

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
                <div class="col s2 m2">
                    <div class="card">
                        <div class="card-image">
                            <img src={producto.url} alt='productos'/>
                            <span class="card-title">{producto.title}</span>
                        </div>
                        <div class="card-content">
                        </div>
                        <div class="card-action">
                            <a href="/">{producto.thumbnailUrl}</a>
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
      <div>
        <Header/>
        <div className='row'>
            {this.desplegarProductos()}
        </div>
      </div>
    )
  }
}

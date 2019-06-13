import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../Components/Header'
import axios from 'axios';
import logo from '../Components/image/logoGrande.png';
import regalo from '../Components/image/new-product.png';
import tienda from '../Components/image/retail.png';
import mapa from '../Components/image/map-location.png';
import present from '../Components/image/present.png';
import camiseta from '../Components/image/html.jpg';
import peluche from '../Components/image/peluche.jpg';
import venom from '../Components/image/venom.jpg';
import gorra from '../Components/image/gorra.jpg';
import facebook from '../Components/image/001-facebook-logo.png';
import instagram from '../Components/image/002-instagram-logo.png';
import twetter from '../Components/image/003-twitter-social-symbol.png';
import pinteres from '../Components/image/004-pinterest-sign.png';
import bedu from '../Components/image/Logo-Bedu.png';


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state={
          productos:[],
          modalIsOpen:false,
          user:'',
          password:''
        }
        this.handleOpenModal=this.handleOpenModal.bind(this);
        this.handleCloseModal=this.handleCloseModal.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClickButton=this.onClickButton.bind(this)
    }
    

    async componentDidMount(){
        const resp = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
        this.setState({
          productos:resp.data
        })
    }

    handleUser=e=> {
      console.log(e.target.value);
      this.setState({user: e.target.value});
    }

    handlePassword=e=> {
      this.setState({password: e.target.value});
    }
  
    handleSubmit=e=> {
      alert('A name was submitted: ' + this.state.user);
      console.log('A Username was submitted:'+this.state.user)
      console.log('A Password was submitted'+this.state.password)
      e.preventDefault();
    }

    onClickButton =e=> {
      e.preventDefault();
    }

    handleOpenModal = e => {
      this.setState({ modalIsOpen: true });
    };
  
    handleCloseModal = e => {
      this.setState({ modalIsOpen: false });
    };

    
  render() {
    return (
      <React.Fragment>
        <header className="imagen-fondo">
          <Header 
            onCloseModal={this.handleCloseModal}
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            onClickLogin={this.handleSubmit}
            handleUser={this.handleUser}
            handlePassword={this.handlePassword}
          />
          <div className="imagenGrande">
            <img src={logo} alt="" className="logoGrande"/>
          </div>
        </header>
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
            <p className="subtitle">Ropa, Juguetes, accesorios todo tipo de regalos, para esa persona ideal.</p>
            <Link to='/catalogo' className='btn'>Entrar</Link>
          </div>
          <div className="regalo">
            <img src={tienda} alt="" className="iconosSection"/>
            <p className="subtitle">Miles de tiendas de regalos y diseños de envolturas a tu alcance.</p>
            <Link to='/catalogo' className='btn'>Entrar</Link>
          </div>
          <div className="regalo">
            <img src={mapa} alt="" className="iconosSection"/>
            <p className = "subtitle"> Envíos dentro de la zona metropolitana de Jalisco en cualquier momento. </p>
            <Link to='/catalogo' className='btn'>Entrar</Link>
          </div>
          <div className="regalo">
            <img src={present} alt="" className="iconosSection"/>
            <p className="subtitle">Envía tus obsequios sin problemas desde donde estés.</p>
            <Link to='/catalogo' className='btn'>Entrar</Link>
          </div>            
        </div>
        <section className="imagen-nosotros">
          <div className="contenedor">
            <h2>Nosotros</h2>          
            <p className="texNosotros"><span> ❝ </span>Somos un grupo de personas con pasión por el desarrollo web y nuevas tecnologías para el desarrollo... Nuestro proyecto fue inspirado en las necesidades que surgen al momento de querer hacer algún obsequio para alguna persona querida o especial, y no tienes el tiempo de hacer una compra de ese regalo o querer dar esa sorpresa a la persona que tanto quieres. <span> ❞ </span></p>
          </div>
        </section>
        <main className="seccion contenedor">
          <h2 className="tipo-productos">Tipos de Productos que podrias encontrar</h2>
          <div className="contenedor-anuncios">
            <div className="anuncio">
                <img src={camiseta} alt=""/>
                <div className="contenido-anuncio">
                  <h3>Playera con imagen de HTML estilo AC/DC</h3>
                  <p>$350.00</p>
                  <Link to='/catalogo' className='btn'>Ver mas</Link>
                </div>
            </div>
            <div className="anuncio">
                <img src={peluche} alt=""/>
                <div className="contenido-anuncio">
                  <h3>Mono de Peluche con forma de lobo</h3>
                  <p>$750.00</p>
                  <Link to='/catalogo' className='btn'>Ver mas</Link>
                </div>
            </div>
            
            <div className="anuncio">
                <img src={venom} alt=""/>
                <div className="contenido-anuncio">
                  <h3>Fuko de Capitan America estilo Venom</h3>
                  <p>$2450.00</p>
                  <Link to='/catalogo' className='btn'>Ver mas</Link>
                </div>
            </div>
            
            <div className="anuncio">
                <img src={gorra} alt=""/>
                <div className="contenido-anuncio">
                  <h3>Gorra para aplicar estampados</h3>
                  <p>$80.00</p>
                  <Link to='/catalogo' className='btn'>Ver mas</Link>
                </div>
            </div>
          </div>
        </main>
        <footer>  
          <div className="iconos-sociales">
            <img src={facebook} alt="" className="icon-media"/>
            <img src={instagram} alt="" className="icon-media"/>
            <img src={twetter} alt="" className="icon-media"/>
            <img src={pinteres} alt="" className="icon-media"/>
          </div>
          <div className="derechos">
            <p className="autores"> Idea Original, Creacion y Diseño de Equipo 6 de <img src={bedu} alt="" className="img-bedu"/></p>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

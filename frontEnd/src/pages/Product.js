import React, { Component } from 'react'
import Product from '../Components/ProductDetail';
import ProductTab from '../Components/ProductTabs';
import Header from '../Components/Header'

export default class ProductPage extends Component {
  render() {
    return (
        <React.Fragment>
          <Header/>
          <div className="row">
            <Product/>
            <ProductTab/>
          </div>
        </React.Fragment>
    )
  }
}
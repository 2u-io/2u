import React, { Component } from 'react'
import Product from '../Components/ProductDetail';
import ProductTab from '../Components/ProductTabs';

export default class ProductPage extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="row">
            <Product/>
            <ProductTab/>
          </div>
        </React.Fragment>
    )
  }
}
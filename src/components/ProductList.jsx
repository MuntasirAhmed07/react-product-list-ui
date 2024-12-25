import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Product from './Product';

const ProductList = (props) => {
    if (!props) {
        return null; 
      }
  return (
    <div className='container'>
        {props.list.map((product, index) => {
          return (
            <Product key={index} data={product}/>
          );
        })}
    </div>
  )
}

export default ProductList
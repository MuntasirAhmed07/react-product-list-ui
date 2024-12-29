import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import {
  default as CardSkeleton,
  default as ProductsSkeleton,
} from './ProductsSkeleton';

const ProductList = (props) => {
  if (!props) {
    return null;
  }
  return (
    <div className="container">
      <div className="product-container">
        {props.list.map((product, index) => {
          return <Product key={index} data={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;

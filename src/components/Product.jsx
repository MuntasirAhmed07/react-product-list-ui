import React from 'react';

const Product = ({ data }) => {
    if (!data) {
        return null;      
    }

    return (
      <div className="card">
        <div className="container">
          <h4><b>{data.title}</b></h4>
          <p>{data.description}</p>
        </div>
      </div>
    );
  };
  
  export default Product;
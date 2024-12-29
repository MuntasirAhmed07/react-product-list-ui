import React from 'react';
import SvgDiscountRibbon from '../assets/SvgDiscountRibbon';
import Wishlist from '../assets/Wishlist';

const Product = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="card">
      <div className="ribbon">
        <SvgDiscountRibbon />
        <span>- ৳ {data.discountPercentage}</span>
      </div>
      <div className="card-details">
        <div className="img-part">
          <img src={data.thumbnail} alt={data.title} className="product-img " />{' '}
          <div className="wishlist-icon">
            <Wishlist />
          </div>
          <div className="dark-overlay"></div>
          <div className="hover-content">
            <button>Add to Cart</button>
            <button>Quick View</button>
          </div>
        </div>
        <div className="product-details">
          <p className="product-title">{data.title}</p>
          <h3 className="truncate-2-lines"> {data.description}</h3>
          <span className="product-price">
            <p className="price">৳{data.price}</p>
            <p className="discount-price">৳{data.discountPercentage}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;

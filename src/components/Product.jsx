import React, { useState } from 'react';
import Cart from '../assets/Cart';
import Eye from '../assets/Eye';
import Plus from '../assets/Plus';
import SvgDiscountRibbon from '../assets/SvgDiscountRibbon';
import Trash from '../assets/Trash';
import { useConverter } from '../store/useConverter';

import Wishlist from '../assets/Wishlist';

const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(0);
  const hasDiscount = data.discountPercentage && data.discountPercentage > 0;

  const { convertPriceToTk, calculateDiscountedPriceInTk } = useConverter();

  if (!data) {
    return null;
  }
  const priceInTk = convertPriceToTk(data.price);
  const discountedPriceTk = calculateDiscountedPriceInTk(
    data.price,
    data.discountPercentage
  );

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
    }
  };

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 0));
  };

  return (
    <div className={`card ${quantity > 0 ? 'in-cart' : ''}`}>
      {hasDiscount && (
        <div className="ribbon">
          <SvgDiscountRibbon />
          <span>- ৳ {discountedPriceTk}</span>
        </div>
      )}
      <div className="card-details">
        <div className="img-part">
          <img src={data.thumbnail} alt={data.title} className="product-img " />{' '}
          <div className="wishlist-icon">
            <Wishlist />
          </div>
          <div className="dark-overlay"></div>
          <div className="hover-content">
            {quantity === 0 ? (
              <button
                className="btn-text-center add-to-cart-btn"
                onClick={handleAddToCart}
              >
                <Cart /> Add to Cart
              </button>
            ) : (
              <div className="in-cart-btn">
                <div className="quantity-controls">
                  <Trash onClick={handleDecrement} className="trash" />
                  <span className="active-cart-btn-text">
                    {quantity} Added in Cart
                  </span>
                  <Plus onClick={handleIncrement} className="plus" />
                </div>
              </div>
            )}
            <button className="btn-text-center">
              <Eye /> Quick View
            </button>
          </div>
        </div>
        <div className="product-details">
          <p className="product-title">{data.title}</p>
          <p className="truncate-2-lines"> {data.description}</p>
          <span className="product-price">
            {hasDiscount ? (
              <>
                {/* For example, you might show the original price as strikethrough: */}
                <p className="price original-price">৳{priceInTk}</p>
                <p className="discount-price">৳{discountedPriceTk}</p>
              </>
            ) : (
              <p className="price">৳{data.price}</p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;

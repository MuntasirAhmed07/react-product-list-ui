import Lottie from 'lottie-react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import ImagePlaceholder from '../assets/image.json';

const ProductsSkeleton = () => {
  return (
    <div className="products-skeleton-container">
      <div className="products-skeleton-row container">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="products-skeleton-column">
            <div className="products-skeleton-card">
              <div className="products-skeleton-image-wrapper">
                <Lottie
                  animationData={ImagePlaceholder}
                  loop={true}
                  className="products-skeleton-lottie"
                />
              </div>

              <div className="products-skeleton-card-body">
                <Skeleton height={20} width="70%" style={{ marginBottom: 8 }} />

                <Skeleton count={2} style={{ marginBottom: 8 }} />

                <div className="products-skeleton-price-row">
                  <Skeleton width="40%" height={20} />
                  <Skeleton width="30%" height={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSkeleton;

import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../apiRequest/apiRequest';
import ProductList from '../components/ProductList';
import Layout from '../layouts/Layout';

export const HomePage = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let res = await getAllProducts();
        setProductList(res);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    })();
  }, []);

  useEffect(() => {
    if (productList !== null) {
      console.log('Updated productList:', productList); // Log when productList updates
    }
  }, [productList]);

  return (
    <Layout>
      {productList === null ? (
        <p>Loading...</p>
      ) : (
        <ProductList list={productList} />
      )}
    </Layout>
  );
};

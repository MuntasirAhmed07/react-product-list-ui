import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../apiRequest/ApiRequest';
import ProductList from '../components/ProductList';
import ProductsSkeleton from '../components/ProductsSkeleton';
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
      console.log('Updated productList:', productList);
    }
  }, [productList]);

  return (
    <Layout>
      {productList === null ? (
        <ProductsSkeleton />
      ) : (
        <ProductList list={productList} />
      )}
    </Layout>
  );
};

import React, { useState, useEffect } from 'react';
import { Grid, Flex } from './style';
import Product from '../Product/index';
import { commerce } from '../../lib/commerce';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      <Grid gap={24}>
        {products.map((product: Product) => (
          <Flex key={product.id} padding={16} shadow={true}>
            <Product product={product} parent='List'/>
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;

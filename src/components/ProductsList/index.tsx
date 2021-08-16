import React from 'react';
import { Grid, Flex } from './style';
import Product from '../Product/index';

const products = [
  {
    id: 1,
    name: 'Razer Mouse',
    description: 'Razor Mouse for gamers',
    price: 199.2
  },
  {
    id: 2,
    name: 'Razer Keyboard',
    description: 'Razor Mouse for gamers',
    price: 199.2
  }
];

const ProductList = () => {
  return (
    <>
      <Grid gap={4}>
        {products.map((product) => (
          <Flex key={product.id} padding={16} shadow={true}>
            <Product product={product} />
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;

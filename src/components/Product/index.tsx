import React from 'react';
import { ProductHeader, Name, Price, Description } from './style';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface Props {
  product: Product;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <>
      <img title={product.name} src="" />
      <ProductHeader>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
      </ProductHeader>
      <Description>{product.description}</Description>
    </>
  );
};

export default Product;

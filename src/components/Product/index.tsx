import React from 'react';
import { ProductHeader, Name, Price, Description } from './style';
import { priceFormatter } from '../../shared/Formatter';

interface Product {
  id: number;
  name: string;
  price: any;
  description: String;
  media: any;
}

interface Props {
  product: Product;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <>
      <img title={product.name} src={product.media.source} />
      <ProductHeader>
        <Name>{product.name}</Name>
        <Price>{priceFormatter.format(product.price.raw)}</Price>
      </ProductHeader>
      <Description>{product.description}</Description>
    </>
  );
};

export default Product;

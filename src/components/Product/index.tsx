import React from 'react';
import {
  ProductHeader,
  Name,
  Price,
  Description,
  ImageCont,
  ProductImage
} from './style';
import { priceFormatter } from '../../shared/Formatter';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: any;
  description: string;
  media: any;
  permalink: string;
}

interface Props {
  product: Product;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <Link to={`/product/${product.permalink}`}>
      <ImageCont width={100} height={300}>
        <ProductImage title={product.name} src={product.media.source} />
      </ImageCont>

      <ProductHeader>
        <Name>{product.name}</Name>
        <Price>{priceFormatter.format(product.price.raw)}</Price>
      </ProductHeader>
      <Description
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></Description>
    </Link>
  );
};

export default Product;

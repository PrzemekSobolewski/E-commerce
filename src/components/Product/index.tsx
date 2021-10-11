import React, {useState, useEffect} from 'react';
import {
  ProductHeader,
  Name,
  Price,
  Description,
  ImageCont,
  ProductImage,
  ProductLink,
  ProductDetails
} from './style';
import { priceFormatter } from '../../shared/Formatter';

interface Product {
  id: number;
  name: string;
  price: any;
  description: string;
  media: any;
  permalink: string;
  quantity: number;
}

interface Props {
  product: Product;
  parent: string;
}

const Product: React.FC<Props> = ({ product, parent }) => {
  const isListParent = (parent === 'List') ? true : false;
  const isCartParent = (parent === 'Cart') ? true : false;
  return (
    <>

      <ProductLink to={`/product/${product.permalink}`}>
        <ImageCont width={100} height={300}>
          <ProductImage title={product.name} src={product.media.source} />
        </ImageCont>
      </ProductLink>
      <ProductDetails>
        <ProductHeader>
          <Name>{product.name}</Name>
          <Price>{priceFormatter.format(product.price.raw)}</Price>
        </ProductHeader>
        {isListParent ? (
        <Description
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></Description>
        ): null}
        
        {isCartParent ? (
          <div>
            <span>{product.quantity}</span>
            <button>remove</button>
            
          </div>
          
        ) : null}
      </ProductDetails>
    </>
  );
};

export default Product;

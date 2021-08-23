import React, { useState, useEffect } from 'react';
import { priceFormatter } from '../../shared/Formatter';
import { commerce } from '../../lib/commerce';
import {
  ProductHeader,
  Name,
  Price,
  Description,
  ImageCont,
  ProductImage
} from './style';

interface Product {
  id: number;
  name: string;
  price: any;
  description: string;
  media: any;
}

interface Props {
  product: Product;
  permalink: string;
  match: any;
}

const ProductPage: React.FC<Props> = (props) => {
  const [product, setProduct] = useState<any>();
  const { permalink } = props.match.params;

  const fetchProduct = async () => {
    const product = await commerce.products.retrieve(`${permalink}`, {
      type: 'permalink'
    });

    setProduct(product);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {product ? (
        <div>
          <ImageCont width={100} height={300}>
            <ProductImage title={product.name} src={product.media.source} />
          </ImageCont>

          <ProductHeader>
            <Name>{product.name}</Name>
            <Price>{priceFormatter.format(product.price.raw)}</Price>
          </ProductHeader>
          <Description
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      ) : null}
    </>
  );
};

export default ProductPage;

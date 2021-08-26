import React, { useState, useEffect } from 'react';
import { priceFormatter } from '../../shared/Formatter';
import { commerce } from '../../lib/commerce';
import {
  ProductHeader,
  Name,
  Price,
  Description,
  ImageCont,
  ProductImage,
  ProductContainer,
  Content,
  AddToCartBtn
} from './style';

interface Props {
  permalink?: string;
  match?: any;
  handleAddToCart: any;
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
        <ProductContainer>
          <ImageCont>
            <ProductImage title={product.name} src={product.media.source} />
          </ImageCont>
          <Content>
            <ProductHeader>
              <Name>{product.name}</Name>
              <Price>{priceFormatter.format(product.price.raw)}</Price>
            </ProductHeader>
            <Description
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <AddToCartBtn>Dodaj do koszyka</AddToCartBtn>
          </Content>
        </ProductContainer>
      ) : null}
    </>
  );
};

export default ProductPage;

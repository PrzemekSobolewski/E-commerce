import styled from '@emotion/styled';

export interface Props {
  width?: number;
  height?: number;
}

const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImageCont = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
const ProductHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-weight: bold;
  width: 100%;
`;

const Name = styled.h1`
  color: #000000;
  font-size: 24px;
  margin: 1em 0 1em 0;
`;

const Price = styled.h2`
  color: #000000;
  font-size: 24px;
  margin: 0em 0 1em 0;
`;

const Description = styled.p`
  color: #222222;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  width: 100%;
  margin: 0px;
`;

const AddToCartBtn = styled.span`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 8px 1px;
  height: 48px;
  color: #ffffff;
  width: 100%;
  background-color: #009933;
  cursor: pointer;
  margin-top: 2em;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
`;

export {
  ProductHeader,
  Name,
  Price,
  Description,
  ImageCont,
  ProductImage,
  ProductContainer,
  Content,
  AddToCartBtn
};

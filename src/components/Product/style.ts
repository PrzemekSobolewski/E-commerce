import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export interface Props {
  width?: number;
  height?: number;
}

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
`;

const Name = styled.h5`
  color: #000000;
  font-size: 18px;
  margin: 1em 0 1em 0;
`;

const Price = styled.h5`
  color: #000000;
  font-size: 18px;
  margin: 1em 0 1em 0;
`;

const Description = styled.p`
  color: #222222;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  width: 100%;
  margin: 0px;
`;

const ImageCont = styled.div`
  width: ${(p: Props) => (p.width ? p.width : 150)}px;
  height: ${(p: Props) => (p.height ? p.height : 300)}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProductLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

export {
  ProductHeader,
  Name,
  Price,
  Description,
  ImageCont,
  ProductImage,
  ProductLink
};

import styled from '@emotion/styled';

export interface Props {
  padding?: number;
  gap?: number;
  width?: number;
  height?: string;
  shadow?: boolean;
}

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

const Name = styled.h5`
  color: #000000;
  font-size: 18px;
`;

const Price = styled.h5`
  color: #000000;
  font-size: 18px;
`;

const Description = styled.p`
  color: #222222;
  font-size: 14px;
  font-weight: normal;
`;

export { ProductHeader, Name, Price, Description };

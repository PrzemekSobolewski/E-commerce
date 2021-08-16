import styled from '@emotion/styled';

export interface Props {
  padding?: number;
  gap?: number;
  width?: number;
  height?: string;
  shadow?: boolean;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${(p: Props) => (p.gap ? p.gap : 0)}px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(p: Props) => (p.padding ? p.padding : 8)}px;
  box-shadow: ${(p: Props) =>
    p.shadow
      ? '0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)'
      : 'none'};
`;

export { Grid, Flex };

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export interface Props {
  width?: number;
  height?: number;
}

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 0%), 0 6px 20px 0 rgb(0 0 0 / 10%);
`;

const NavTopContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 200px;
`;

const UserActions = styled.div`
    display: flex;
    align-items: center;
    justify-content center;
`;

const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IconValue = styled.span`
  position: absolute;
  top: -9px;
  right: -9px;
  z-index: 1;
  color: #ffffff;
  background-color: #009933;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 500;
  font-size: 10px;
`;

export { NavContainer, NavTopContent, Logo, UserActions, Cart, IconValue };

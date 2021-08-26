import React, { useState } from 'react';
import { Container } from '../../style';
import {
  NavContainer,
  NavTopContent,
  Logo,
  UserActions,
  Cart,
  IconValue
} from './style';
import { BiCart } from 'react-icons/bi';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

interface Props {
    totalItems: any;
}

const Navbar: React.FC<Props> = ({totalItems}) => {
  console.log(totalItems)
  return (
    <NavContainer>
      <Container>
        <NavTopContent>
          <Link to="/">
            <Logo src={logo} />
          </Link>

          <UserActions>
            <Cart to="/cart">
              <BiCart size={32} color="#000000" />
              <IconValue>{totalItems ? totalItems : 0}</IconValue>
            </Cart>
          </UserActions>
        </NavTopContent>
      </Container>
    </NavContainer>
  );
};

export default Navbar;

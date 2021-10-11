import React from 'react';
import {
    CartContent,
    Flex
  } from './style';
import Product from '../Product';
interface Props {
    cart: any;
}

const Cart: React.FC<Props> = ({cart}) => {

    return(
        <>
        {cart.line_items ? (
            <CartContent>
                {cart.line_items.map((product: any) => (
                    <Flex key={product.id}>
                        <Product product={product} parent='Cart' />
                    </Flex>
                ))}
            </CartContent>
        ) : null}
        </>
    );
}

export default Cart;
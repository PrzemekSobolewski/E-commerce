import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductsList';
import ProductPage from './components/ProductPage';
import { Container } from './style';
import { Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';

const App = () => {
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (produductId: string, quantity: number) => {
    const item = await commerce.cart.add(produductId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <Container>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route
          exact
          path="/product/:permalink"
          render={(props) => (
            <ProductPage {...props} handleAddToCart={handleAddToCart} />
          )}
        />
      </Switch>
    </Container>
  );
};

export default App;

import React from 'react';
import ProductList from './components/ProductsList';
import ProductPage from './components/ProductPage';
import { Container } from './style';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/product/:permalink" component={ProductPage} />
      </Switch>
    </Container>
  );
};

export default App;

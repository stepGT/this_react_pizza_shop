import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { fetchPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

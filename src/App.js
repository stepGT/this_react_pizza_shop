import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((json) => {
        setItems(json.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

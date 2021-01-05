import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

const categoryNames = [
  'Мясные', 
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];

const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({ filters }) => filters);

    React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, sortBy]);
    const onSelectCategory = React.useCallback(index => {
      dispatch(setCategory(index));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const onSelectSortType = React.useCallback(type => {
      dispatch(setSortBy(type));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addPizzaToCartHandle = (pizzaObj) => {
      dispatch(addPizzaToCart(pizzaObj));
    }
    return (
        <div className="container">
          <div className="content__top">
            <Categories
              activeItem={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}/>
            <SortPopup 
              items={sortItems}
              activeSortType={sortBy.type}
              onClickSortType={onSelectSortType}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoaded
          ? items.map((obj) => <PizzaBlock onClickAddPizza={addPizzaToCartHandle} addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} key={obj.id} {...obj} />)
          : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)}
          </div>
        </div>
    )
}

export default Home;

import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

const categoryNames = [
  'Мясные', 
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];

const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'}
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({ filters }) => filters);

    React.useEffect(() => {
      dispatch(fetchPizzas());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);
    const onSelectCategory = React.useCallback(index => {
      dispatch(setCategory(index));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container">
          <div className="content__top">
            <Categories
              activeItem={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}/>
            <SortPopup items={sortItems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoaded
          ? items.map((obj) => <PizzaBlock isLoading={true} key={obj.id} {...obj} />)
          : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)}
          </div>
        </div>
    )
}

export default Home;

import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({activeItem, items, onClickCategory}) {
  return (
      <div>
          <div className="categories">
            <ul>
              <li
              onClick={()=>onClickCategory(null)}
              className={activeItem === null ? 'active' : ''}>
                Все
              </li>
              {items && items.map((name, index) => 
                <li
                className={activeItem === index ? 'active' : ''}
                onClick={()=>onClickCategory(index)} 
                key={`${name}__${index}`}>
                  {name}
                </li>
              )}
            </ul>
          </div>
      </div>
  )
});

Categories.propTypes = {
  activeItem: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickItem: PropTypes.func
}

Categories.defaultProps = {
  activeItem: null,
  items: []
};

export default Categories

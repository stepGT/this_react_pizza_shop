import React from 'react';

// class Categories extends React.Component {
//   state = {
//     activeItem: 0
//   };

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index
//     });
//   }

//   render() {
//     const {items} = this.props;
//     return (
//       <div>
//           <div className="categories">
//             <ul>
//               <li>Все</li>
//               {items.map((name, index) => 
//                 <li
//                 className={this.state.activeItem === index ? 'active' : ''}
//                 onClick={()=>{this.onSelectItem(index)}} 
//                 key={`${name}__${index}`}>
//                   {name}
//                 </li>
//               )}
//             </ul>
//           </div>
//       </div>
//     )
//   };
// }

function Categories({items}) {
    const [activeItem, setActiveItem] = React.useState(null);
    const onSelectItem = index => {
      setActiveItem(index);
    }
    return (
        <div>
            <div className="categories">
              <ul>
                <li
                onClick={()=>onSelectItem(null)}
                className={activeItem === null ? 'active' : ''}>
                  Все
                </li>
                {items && items.map((name, index) => 
                  <li
                  className={activeItem === index ? 'active' : ''}
                  onClick={()=>onSelectItem(index)} 
                  key={`${name}__${index}`}>
                    {name}
                  </li>
                )}
              </ul>
            </div>
        </div>
    )
}

export default Categories

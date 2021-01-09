const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                },
            }
            // All pizzas
            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas)
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        case 'CLEAR_PIZZA_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        case 'REMOVE_CART_ITEM':
            const stateNewItems = { ...state.items }
            const currentTotalPrice = stateNewItems[action.payload].totalPrice;
            const currentTotalCount = stateNewItems[action.payload].items.length;
            //
            delete stateNewItems[action.payload];
            return {
                ...state,
                items: stateNewItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        default: return state;
    }
}

export default cart;
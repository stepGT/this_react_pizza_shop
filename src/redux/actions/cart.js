export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
});

export const clearPizzaCart = () => ({
    type: 'CLEAR_PIZZA_CART'
});

export const removeCartItem = (pizzaId) => ({
    type: 'REMOVE_CART_ITEM',
    payload: pizzaId
});
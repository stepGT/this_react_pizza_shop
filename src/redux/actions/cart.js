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

export const plusCartItem = (pizzaId) => ({
    type: 'PLUS_CART_ITEM',
    payload: pizzaId
});

export const minusCartItem = (pizzaId) => ({
    type: 'MINUS_CART_ITEM',
    payload: pizzaId
});
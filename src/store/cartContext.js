import { createContext, useContext } from 'react';

const CartContext = createContext({
	items: [],
	addMeal(meal) {},
	removeMeal(id) {},
	resetCart() {},
});

export const useCart = () => useContext(CartContext);

export default CartContext;

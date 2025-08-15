import { createContext, useContext } from 'react';

const CartContext = createContext({
	items: [],
	addMeal(meal) {},
	removeMeal(meal) {},
});

export const useCart = () => useContext(CartContext);

export default CartContext;

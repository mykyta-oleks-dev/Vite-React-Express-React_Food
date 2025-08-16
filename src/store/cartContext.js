import { createContext, useContext } from 'react';

const CartContext = createContext({
	items: [],
	addMeal(meal) {},
	removeMeal(id) {},
});

export const useCart = () => useContext(CartContext);

export default CartContext;

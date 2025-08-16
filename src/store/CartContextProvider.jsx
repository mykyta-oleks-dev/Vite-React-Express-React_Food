import { useMemo, useState } from 'react';
import CartContext from './cartContext';

export const CartContextProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const addMeal = (meal) => {
		const candidateIdx = items.findIndex((i) => i.meal.id === meal.id);

		if (candidateIdx === -1) {
			setItems((prev) => {
				return [...prev, { meal, amount: 1 }];
			});
			return;
		}

		const cartItems = [
			...items.map((i) => ({ ...i, meal: { ...i.meal } })),
		];

		cartItems[candidateIdx].amount++;

		setItems(cartItems);
	};

	const removeMeal = (meal) => {
		const candidateIdx = items.findIndex((i) => i.meal.id === meal.id);

		if (candidateIdx === -1) {
			return;
		}

		const cartItems = [
			...items.map((i) => ({ ...i, meal: { ...i.meal } })),
		];

		cartItems[candidateIdx].amount--;

		if (cartItems[candidateIdx].amount <= 0) cartItems.splice(candidateIdx, 1)

		setItems(cartItems);
	};

	const contextValue = useMemo(
		() => ({
			items,
			addMeal,
			removeMeal,
		}),
		[items, addMeal, removeMeal]
	);

	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
};

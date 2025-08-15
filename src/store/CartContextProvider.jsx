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

		const candidate = { ...items[candidateIdx] };
		candidate.amount++;

		cartItems[candidateIdx] = candidate;

		setItems(cartItems);
	};

	const removeMeal = (meal) => {
		const candidateIdx = items.findIndex((i) => i.meal.id === meal.id);

		if (candidateIdx === -1) {
			setItems((prev) => [...prev, { meal, amount: 1 }]);
			return;
		}

		const candidate = {
			...items[candidateIdx],
			meal: { ...items[candidateIdx].meal },
		};
		candidate.amount--;

		const cartItems = [
			...items.map((i) => ({ ...i, meal: { ...i.meal } })),
		];

		if (candidate.amount > 0) cartItems[candidateIdx] = candidate;
		else cartItems.splice(candidateIdx, 1);

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

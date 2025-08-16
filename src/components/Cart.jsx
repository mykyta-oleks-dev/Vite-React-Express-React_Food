import { useCart } from '../store/cartContext';

const Cart = () => {
	const { items } = useCart();
	console.log({ items });

	return (
		<div className="cart">
			<h2>Cart</h2>
			<ul>
				{items.map((i) => (
					<li key={i.meal.id}>{i.meal.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Cart;

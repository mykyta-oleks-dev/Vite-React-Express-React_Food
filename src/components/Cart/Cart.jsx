import { useCart } from '../../store/cartContext';
import { currencyFormatter } from '../../util/formatting';
import Button from '../UI/Button';
import CartItem from './CartItem';

const Cart = ({ onClose, onCheckout }) => {
	const { items, addMeal, removeMeal } = useCart();

	const isNotEmpty = items.length > 0;

	const handleAddMeal = (meal) => {
		addMeal(meal);
	};

	const handleRemoveMeal = (id) => {
		removeMeal(id);
	};

	return (
		<div className="cart">
			<h2>Cart</h2>
			<ul>
				{isNotEmpty ? (
					items.map((i) => {
						return (
							<CartItem
								key={`cart-${i.meal.id}`}
								item={i}
								onAdd={handleAddMeal}
								onRemove={handleRemoveMeal}
							/>
						);
					})
				) : (
					<p>No meal is added to cart</p>
				)}
			</ul>
			{isNotEmpty && (
				<p className="cart-total">
					Total:{' '}
					{currencyFormatter.format(
						items.reduce(
							(acc, item) => acc + item.meal.price * item.amount,
							0
						)
					)}
				</p>
			)}
			<p className="modal-actions">
				<Button text onClick={onClose}>
					Close
				</Button>
				{isNotEmpty && (
					<Button onClick={onCheckout}>Go to Checkout</Button>
				)}
			</p>
		</div>
	);
};

export default Cart;

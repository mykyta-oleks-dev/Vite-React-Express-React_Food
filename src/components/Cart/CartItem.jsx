import { currencyFormatter } from '../../util/formatting';

const CartItem = ({ item, onAdd, onRemove }) => {
	const { meal, amount } = item;

	return (
		<li key={meal.id} className="cart-item">
			<p>
				{meal.name} - {currencyFormatter.format(meal.price)}
			</p>
			<p className="cart-item-actions">
				<button type="button" onClick={() => onRemove(meal.id)}>
					-
				</button>
				<span>{amount}</span>
				<button type="button" onClick={() => onAdd(meal)}>
					+
				</button>
			</p>
		</li>
	);
};

export default CartItem;

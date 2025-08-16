import { useCart } from '../store/cartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';

const MealItem = ({ meal }) => {
	const { addMeal } = useCart();
	return (
		<li className="meal-item">
			<article>
				<img
					src={`http://localhost:3000/${meal.image}`}
					alt={meal.name}
				/>
				<div>
					<h3>{meal.name}</h3>
					<span className="meal-item-price">
						{currencyFormatter.format(meal.price)}
					</span>
					<p className="meal-item-description">{meal.description}</p>
				</div>
				<div className="meal-item-actions">
					<Button onClick={() => addMeal(meal)}>Add to Cart</Button>
				</div>
			</article>
		</li>
	);
};

export default MealItem;

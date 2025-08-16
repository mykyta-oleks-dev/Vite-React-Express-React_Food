import useMeals from '../hooks/useMeals';
import MealItem from './MealItem';

const Meals = () => {
	const { meals, isLoading, error } = useMeals();

	if (isLoading) return <p>Loading...</p>;

	return (
		<div id="meals">
			{meals.length > 0 &&
				meals.map((m) => <MealItem key={m.id} meal={m} />)}
			{meals.length === 0 && <p>No meals available to order</p>}
		</div>
	);
};

export default Meals;

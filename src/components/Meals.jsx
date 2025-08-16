import useMeals from '../hooks/useMeals';
import MealItem from './MealItem';

const Meals = () => {
	const { meals, isLoading, error } = useMeals();

	if (isLoading) return <p>Loading...</p>;

	return (
		<div id="meals">
			{meals.map((m) => (
				<MealItem key={m.id} meal={m} />
			))}
		</div>
	);
};

export default Meals;

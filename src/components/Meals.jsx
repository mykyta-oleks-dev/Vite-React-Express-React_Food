import useMeals from '../hooks/useMeals';
import Meal from './Meal';

const Meals = () => {
	const { meals, isLoading, error } = useMeals();

	if (isLoading) return <p>Loading...</p>;

	return (
		<div id="meals">
			{meals.map((m) => (
				<Meal key={m.id} meal={m} />
			))}
		</div>
	);
};

export default Meals;

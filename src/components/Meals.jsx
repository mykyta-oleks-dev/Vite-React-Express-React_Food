import useMeals from '../hooks/useMeals';
import MealItem from './MealItem';
import Modal from './Modal';

const Meals = () => {
	const { meals, isLoading, error, closeError } = useMeals();

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<Modal open={!!error} onClose={closeError} error>
				{error && <Error error={error} />}
			</Modal>

			<div id="meals">
				{meals.length > 0 &&
					meals.map((m) => <MealItem key={m.id} meal={m} />)}
				{meals.length === 0 && <p>No meals available to order</p>}
			</div>
		</>
	);
};

export default Meals;

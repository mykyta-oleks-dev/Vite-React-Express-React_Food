import { useEffect, useState } from 'react';

const useMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(
					import.meta.env.VITE_FIREBASE_URL + '/meals.json'
				);
				if (!res.ok) throw new Error('Error fetching meals');

				const data = await res.json();
				setMeals(data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return {
		meals,
		isLoading,
		error,
		closeError: () => {
			setError(null);
		},
	};
};

export default useMeals;

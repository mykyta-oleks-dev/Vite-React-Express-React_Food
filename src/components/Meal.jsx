const Meal = ({ meal }) => {
	return (
		<div className="meal-item" key={meal.id}>
			<article>
				<img
					src={`http://localhost:3000/${meal.image}`}
					alt={meal.name}
				/>
				<h3>{meal.name}</h3>
				<span className="meal-item-price">{meal.price}</span>
				<p className="meal-item-description">{meal.description}</p>
				<div className="meal-item-actions">
					<button type="button" className="button">
						Add to Cart
					</button>
				</div>
			</article>
		</div>
	);
};

export default Meal;

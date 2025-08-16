const Input = ({ label, id, ...props }) => {
	return (
		<div className="control">
			<label htmlFor={id}>{label}</label>
			<input
				{...props}
				id={id}
				name={id}
				type={props.type ?? 'text'}
				required
			/>
		</div>
	);
};

export default Input;

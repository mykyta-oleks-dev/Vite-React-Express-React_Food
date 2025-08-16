const Error = ({ error }) => {
	return (
		<div>
			<h2>An error: {error.name}</h2>
			<p>{error.message ?? 'Unexpected error happened'}</p>
		</div>
	);
};

export default Error;

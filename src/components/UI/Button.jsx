const Button = ({ children, text, className, ...props }) => {
	return (
		<button
			{...props}
			type={props.type ?? 'button'}
			className={`${text ? 'text-button' : 'button'} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;

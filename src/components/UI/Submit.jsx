import { useFormStatus } from 'react-dom';
import Button from './Button';

const Submit = () => {
	const { pending } = useFormStatus();

	return (
		<Button disabled={pending} type="submit">
			{pending ? 'Submitting...' : 'Submit'}
		</Button>
	);
};

export default Submit;

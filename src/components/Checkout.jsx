import { useActionState } from 'react';
import { useCart } from '../store/cartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import Input from './UI/Input';
import Submit from './UI/Submit';

const Checkout = ({ onClose, onError }) => {
	const { items, resetCart } = useCart();
	const [_state, formAction] = useActionState(checkoutAction, {
		values: null,
	});

	const total = items.reduce(
		(acc, item) => acc + item.meal.price * item.amount,
		0
	);

	async function checkoutAction(_prevActionState, fd) {
		const name = fd.get('fullName').trim();
		const email = fd.get('email').trim();
		const street = fd.get('street').trim();
		const postalCode = fd.get('postalCode').trim();
		const city = fd.get('city').trim();

		const values = {
			name,
			email,
			street,
			'postal-code': postalCode,
			city,
		};

		try {
			const res = await fetch(
				import.meta.env.VITE_FIREBASE_URL + '/orders.json',
				{
					method: 'post',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						items,
						customer: values,
					}),
				}
			);

			if (!res.ok) {
				throw new Error('An error on the server side');
			}
			resetCart();
		} catch (err) {
			onError(err);
		}

		onClose();
	}

	return (
		<form action={formAction}>
			<h2>Checkout</h2>
			<p>Total amout: {currencyFormatter.format(total)}</p>

			<Input label="Full name" id="fullName" />
			<Input label="Email" id="email" type="email" />
			<Input label="Street" id="street" />

			<div className="control-row">
				<Input label="Postal code" id="postalCode" />
				<Input label="City" id="city" />
			</div>

			<p className="modal-actions">
				<Button text onClick={onClose}>
					Close
				</Button>
				<Submit />
			</p>
		</form>
	);
};

export default Checkout;

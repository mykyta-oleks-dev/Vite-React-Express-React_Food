import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { useCart } from '../store/cartContext';
import Modal from './Modal';
import Cart from './Cart/Cart';
import Button from './UI/Button';
import Checkout from './Checkout';
import Error from './Error';

const Header = () => {
	const { items } = useCart();
	const [modal, setModal] = useState('');
	const [error, setError] = useState(null);

	const handleClose = () => {
		console.log('closed');
		setModal('');
	};

	const handleGoToCart = () => {
		console.log('on cart');
		setModal('cart');
	};

	const handleGoToCheckout = () => {
		console.log('on checkout');
		setModal('checkout');
	};

	const handleError = (err) => {
		setError(err);
	};

	const handleCloseError = () => {
		setError(null);
	};

	return (
		<>
			<Modal open={!!modal} onClose={handleClose}>
				{modal === 'cart' && (
					<Cart
						onClose={handleClose}
						onCheckout={handleGoToCheckout}
					/>
				)}
				{modal === 'checkout' && <Checkout onClose={handleClose} onError={handleError} />}
			</Modal>

			<Modal open={!!error} onClose={handleCloseError} error>
				{error && <Error error={error} />}
			</Modal>

			<div id="main-header">
				<div id="title">
					<img src={logo} alt="logo" />
					<h1>Reactfood</h1>
				</div>
				<Button text onClick={handleGoToCart}>
					Cart {items.length > 0 ? `(${items.length})` : ''}
				</Button>
			</div>
		</>
	);
};

export default Header;

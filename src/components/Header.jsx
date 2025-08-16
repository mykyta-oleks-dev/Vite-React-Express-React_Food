import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { useCart } from '../store/cartContext';
import Modal from './Modal';
import Cart from './Cart/Cart';
import Button from './UI/Button';

const Header = () => {
	const { items } = useCart();
	const [modal, setModal] = useState('');

	const handleClose = () => {
		setModal('');
	};

	const handleGoToCart = () => {
		setModal('cart');
	};

	const handleGoToCheckout = () => {
		setModal('checkout');
	};

	return (
		<>
			<Modal open={modal === 'cart'} onClose={handleClose}>
				<Cart onClose={handleClose} onCheckout={handleGoToCheckout} />
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

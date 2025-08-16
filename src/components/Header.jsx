import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { useCart } from '../store/cartContext';
import Modal from './Modal';
import Cart from './Cart';
import Button from './UI/Button';

const Header = () => {
	const { items } = useCart();
	const [open, setOpen] = useState(false);

	return (
		<>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Cart />
			</Modal>

			<div id="main-header">
				<div id="title">
					<img src={logo} alt="logo" />
					<h1>Reactfood</h1>
				</div>
				<Button text onClick={() => setOpen(true)}>
					Cart {items.length > 0 ? `(${items.length})` : ''}
				</Button>
			</div>
		</>
	);
};

export default Header;

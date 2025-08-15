import logo from '../assets/logo.jpg';
import { useCart } from '../store/cartContext';

const Header = () => {
	const { items } = useCart();

	return (
		<div id="main-header">
			<div id="title">
				<img src={logo} alt="logo" />
				<h1>Reactfood</h1>
			</div>
			<button className="text-button">
				Cart {items.length > 0 ? `(${items.length})` : ''}
			</button>
		</div>
	);
};

export default Header;

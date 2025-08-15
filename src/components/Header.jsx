import logo from '../assets/logo.jpg';

const Header = () => {
	return (
		<div id="main-header">
			<div id="title">
				<img src={logo} alt="logo" />
				<h1>Reactfood</h1>
			</div>
			<button className='text-button'>Cart</button>
		</div>
	);
};

export default Header;

import '../css/TheFooter.css';

function NavBar({containerClass}) {
	return (
			<div className={containerClass}>
				<a href="#" className="nav-bar-link">О нас</a>
				<a href="#" className="nav-bar-link">Портфолио</a>
				<a href="#" className="nav-bar-link">Заказать</a>
				<a href="#" className="nav-bar-link">Контакты</a>
			</div>

		);
};

export default NavBar;
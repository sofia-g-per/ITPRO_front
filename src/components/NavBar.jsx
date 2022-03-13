import '../css/TheFooter.css';
import {Link} from 'react-router-dom';

function NavBar({containerClass}) {
	return (
			<div className={containerClass}>
				<Link className="nav-bar-link" to="/">
					О нас 
				</Link>
				<Link className="nav-bar-link" to="/portfolio">
					Портфолио 
				</Link>
				<Link className="nav-bar-link" to="/contact-us">
					Заказать
				</Link>
				<span className="nav-bar-link">Контакты</span>	

			</div>

		);
};

export default NavBar;
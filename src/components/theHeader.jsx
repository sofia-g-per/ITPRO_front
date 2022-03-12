import '../css/theHeader.css';
import logo from "../img/Logo.svg";
import { NavLink } from 'react-router-dom';

function TheHeader() {

  return (
    <div className="TheHeader">
        <img src={logo} alt="Logo" className='logo' />
        <div className="NavBarHeader">
          {/* <NavLink to="/" className="NavBarHeaderNavLink">О нас</NavLink>
          {/* <NavLink to="/portfolio" className="NavBarHeaderNavLink">Портфолио</NavLink> */}
          {/* <NavLink to="/contact-us" className="NavBarHeaderNavLink">Заказать</NavLink>  */}
          {/* <a href="#" className="NavBarHeaderNavLink">Контакты</a> */}
        </div>
    </div>
    );
}

export default TheHeader;

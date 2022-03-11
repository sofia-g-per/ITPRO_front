import '../css/theHeader.css';
import logo from "../img/Logo.svg";

function TheHeader() {
  return (
    <div className="the-header">
      <img src={logo} alt="Logo" className="logo"/>
      <div className="nav-bar-header">
        <a href="#" className="nav-bar-header-link">О нас</a>
        <a href="#" className="nav-bar-header-link">Портфолио</a>
        <a href="#" className="nav-bar-header-link">Заказать</a>
        <a href="#" className="nav-bar-header-link">Контакты</a>
      </div>

    </div>

    );
}

export default TheHeader;
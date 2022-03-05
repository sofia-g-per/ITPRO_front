import '../css/theHeader.css';
import logo from "../img/Logo.svg";

function TheHeader() {

  return (
    <div className="TheHeader">
      <div className=" container">
        <img src={logo} alt="Logo" className='logo' />
        <div className="NavBarHeader">
          <a href="#" className="NavBarHeaderLink">О нас</a>
          <a href="#" className="NavBarHeaderLink">Портфолио</a>
          <a href="#" className="NavBarHeaderLink">Заказать</a>
          <a href="#" className="NavBarHeaderLink">Контакты</a>
        </div>
      </div>
    </div>
    );
}

export default TheHeader;

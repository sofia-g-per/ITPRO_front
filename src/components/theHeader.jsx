import '../css/TheHeader.css';
import logo from "../img/Logo.svg";

function TheHeader({children}) {
  return (
    <div className="the-header">
      <img src={logo} alt="Logo" className="logo"/>
        {children}
    </div>
    );
}

export default TheHeader;
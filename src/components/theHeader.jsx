import '../css/TheHeader.css';
import logo from "../img/Logo.svg";
import NavBar from '../components/NavBar.jsx';

function TheHeader() {
  return (
    <div className="the-header">
      <img src={logo} alt="Logo" className="logo"/>
      <NavBar containerClass="nav-bar-row"></NavBar>
    </div>
    );
}

export default TheHeader;
import '../css/RowOfLogos.css';
import frameLogo from "../img/logo section/box.svg";
import rostechLogo from "../img/logo section/box-1.svg";
import rfarmLogo from "../img/logo section/box-2.svg";
import msecLogo from "../img/logo section/box-3.svg";



function RowOfLogos() {
	return(
		<div className="row-of-logos">
			<img src={frameLogo} alt="логотип 26КАДР" className="element-in-row-of-logos"/>
			<img src={rostechLogo} alt="логотип Ростех" className="element-in-row-of-logos"/>
			<img src={rfarmLogo} alt="логотип Р-ФАРМ" className="element-in-row-of-logos"/>
			<img src={msecLogo} alt="логотип МГОК" className="element-in-row-of-logos"/>
		</div>
		);
};

export default RowOfLogos;
import '../css/theFooter.css';
import logo from "../img/Logo.svg";
import VKLogo from "../img/VKLogo.svg";
import InstagramLogo from "../img/InstagramLogo.svg";
import FacebookLogo from "../img/FaceBookLogo.svg";
import YouTubeLogo from "../img/YouTubeLogo.svg";


function TheFooter() {
	return (
		<div className="footer">
			<div className="tainer">
				<div className="TheFooter">
					<div className="leftPartFooterBar">
						<img src={logo} alt="Logo" className="logo"/>
						<p className="simpleText footerText">ITPRO Studio специализируется на создании продуктов для развития <br />бизнеса, презентаций, обучающих материалов, заработка и развлечений.
						</p>
						<div className="social">
							<img src={VKLogo} alt="socialLogoVK" className="socialLogo" />
							<img src={InstagramLogo} alt="socialLogoInstagram" className="socialLogo" />
							<img src={FacebookLogo} alt="socialLogoFaceBook" className="socialLogo" />
							<img src={YouTubeLogo} alt="socialLogoYouTube" className="socialLogo" />
						</div>
					</div>
					<div className="NavBarFooter">
						<a href="#" className="NavBarFooterLink">О нас</a>
						<a href="#" className="NavBarFooterLink">Портфолио</a>
						<a href="#" className="NavBarFooterLink">Заказать</a>
						<a href="#" className="NavBarFooterLink">Контакты</a>
					</div>

				</div>
				
			</div>
			<p className="simpleText">© ООО ”АЙТИПРО”, 2022 г. Все права защищены.
			</p>
		</div>
		);
};

export default TheFooter;

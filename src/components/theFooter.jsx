import '../css/theFooter.css';
import logo from "../img/Logo.svg";
import VKLogo from "../img/VKLogo.svg";
import InstagramLogo from "../img/InstagramLogo.svg";
import FacebookLogo from "../img/FaceBookLogo.svg";
import YouTubeLogo from "../img/YouTubeLogo.svg";


function TheFooter() {
	return (
		<div className="footer">
				<div className="the-footer">
					<div className="left-part-footer-bar">
						<img src={logo} alt="Logo" className="logo"/>
						<p className="basic-text footer-text">ITPRO Studio специализируется на создании продуктов для развития <br />бизнеса, презентаций, обучающих материалов, заработка и развлечений.
						</p>
						<div className="social">
							<img src={VKLogo} alt="socialLogoVK" className="social-logo" />
							<img src={InstagramLogo} alt="socialLogoInstagram" className="social-logo" />
							<img src={FacebookLogo} alt="socialLogoFaceBook" className="social-logo" />
							<img src={YouTubeLogo} alt="socialLogoYouTube" className="social-logo" />
						</div>
					</div>
					<div className="nav-bar-footer">
						<a href="#" className="nav-bar-footer-link">О нас</a>
						<a href="#" className="nav-bar-footer-link">Портфолио</a>
						<a href="#" className="nav-bar-footer-link">Заказать</a>
						<a href="#" className="nav-bar-footer-link">Контакты</a>
					</div>
				</div>
			<p className="basic-text text--small">© ООО ”АЙТИПРО”, 2022 г. Все права защищены.
			</p>
		</div>
		);
};

export default TheFooter;

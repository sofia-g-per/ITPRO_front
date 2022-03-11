import '../css/TheFooter.css';
import VKLogo from "../img/VKLogo.svg";
import InstagramLogo from "../img/InstagramLogo.svg";
import FacebookLogo from "../img/FaceBookLogo.svg";
import YouTubeLogo from "../img/YouTubeLogo.svg";

function SocialLinks() {
	return (
	<div className="social">
		<a href="https://www.foxit.com/ru/downloads/#Foxit-Reader/" className="social-logo"><img src={VKLogo} alt="socialLogoVK" className="social-logo"/></a>
		<a href="#" className="social-logo"><img src={InstagramLogo} alt="socialLogoInstagram" className="social-logo"/></a>
		<a href="#" className="social-logo"><img src={FacebookLogo} alt="socialLogoFaceBook" className="social-logo"/></a>
		<a href="#" className="social-logo"><img src={YouTubeLogo} alt="socialLogoYouTube" className="social-logo"/></a>
	</div>
		
		);
};

export default SocialLinks;
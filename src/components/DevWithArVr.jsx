import '../css/DevWithArVr.css';
import arrow from "../img/background/Vector 85.svg";
import videoArVr from "../img/background/Video.png";
import light1 from "../img/background/Ellipse 58.svg";
import light2 from "../img/background/Ellipse 57.svg";


function DevWithArVr() {
	return(
		<div className="dev-with-ar-vr">
			<h1 className="primary-heading">
				Разработка<br/>
				с внедрением <br/>
				VR / AR
			</h1>
			<div className="container">
				<p className="basic-text white-text">
					ITPRO Studio специализируется на создании продуктов для развития <br/>
					бизнеса, презентаций, обучающих материалов, заработка и развлечений.
				</p>
				<div className="text-with-arrow">
					<p className="purple-text basic-text">Наши проекты</p>
					<img src={arrow} alt="arrow" className="arrow"/>
				</div>
			{/*<video autoplay loop class="video-background-AR-VR">
       			<source src={videoArVr} type="video/mp4"/>
    		</video>*/}	
    		<img src={videoArVr} alt="VideoARVR" className="video-background-AR-VR" />
    		<img src={light1} alt="background light" className="background-lights light1-AR-VR"/>
    		<img src={light2} alt="background light" className="background-lights light2-AR-VR"/>			
			</div>
		</div>
		);
};

export default DevWithArVr;
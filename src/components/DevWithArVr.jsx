import '../css/DevWithArVr.css';
import arrow from "../img/background/Vector 85.svg";

function DevWithArVr() {
	return(
		<div className="dev-with-ar-vr">
			<h1 className="primary-heading">
			Разработка<br/>
			с внедрением <br/>
			VR / AR
			</h1>
			<div className="text-container">
				<p className="basic-text white-text">
					ITPRO Studio специализируется на создании продуктов для развития <br/>
					бизнеса, презентаций, обучающих материалов, заработка и развлечений.
				</p>
				<div className="text-with-arrow">
					<p className="purple-text basic-text">Наши проекты</p>
					<img src={arrow} alt="arrow" className="arrow"/>
				</div>
				
			</div>
		</div>
		);
};

export default DevWithArVr;
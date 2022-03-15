import '../css/OurCustomers.css';
import img from "../img/our customers/213123 1.png";

function OurCustomers() {
	return(
		<div className="our-customers">
			<div className="customers-text-container">
				<h2 className="secondary-heading">
					Наши заказчики
				</h2>
				<p className="basic-text customers-text-padding">
					Компании для которых проектируем сайты, сервисы, промышленные<br/>
					симуляторы и мобильные приложения.
				</p>
				
			</div>
			<img src={img} alt="background img" className="background-img"/>
			<img src="" alt="" className="customers-img"/>
			<img src="" alt="" className="customers-img"/>
			<img src="" alt="" className="customers-img"/>
			<img src="" alt="" className="customers-img"/>

		</div>
		);
};

export default OurCustomers;
import '../css/OurCustomers.css';
import img from "../img/our customers/213123 1.png";
import customer1 from "../img/our customers/image 2.png";
import customer2 from "../img/our customers/image 3.png";
import customer3 from "../img/our customers/image 4.png";
import customer4 from "../img/our customers/image 5.png";

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
			<img src={customer1} alt="customer1" className="customers-img"/>
			<img src={customer2} alt="customer2" className="customers-img"/>
			<img src={customer3} alt="customer3" className="customers-img"/>
			<img src={customer4} alt="customer4" className="customers-img"/>

		</div>
		);
};

export default OurCustomers;
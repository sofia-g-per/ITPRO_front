import '../css/StagesOfDevelopment.css';
import ellipse from "../img/Ellipse 62.svg";

function StagesOfDevelopment() {
	return(
		<div className="stages-of-development">
			<h2 className="secondary-heading padding-heading">
				Этапы разработки
			</h2>
			<div className="el-container">
				<div className="text-container">
					<img src={ellipse} alt="ellepse" className="ellipse"/>
					<h3 className="tertiary-heading padding-tertiary-heading">
						Начало работы
					</h3>
					<p className="basic-text padding-text">
						Отслеживаем и транслируем процесс реализации <br/>
						с помощью большого количества доступных <br/>
						инструментов - от рабочей группы в мессенджере, <br/>
						до рабочих канбан досок и доступа в наши <br/>
						репозитории.
					</p>					
				</div>
				<div className="text-container">
					<img src={ellipse} alt="ellepse" className="ellipse"/>
					<h3 className="tertiary-heading">
						Предлагаем решение
					</h3>
					<p className="basic-text padding-text">
						Основываясь на нашем опыте предлагаем самую <br/>
						лучшую концепцию и техническое решение на <br/>
						дальнейшее расмотрение.
					</p>
				</div>
				<div className="text-container">
					<img src={ellipse} alt="ellepse" className="ellipse"/>
					<h3 className="tertiary-heading">
						Дорожная карта
					</h3>
					<p className="basic-text padding-text">
						Выделяем майлстоуны, и критерии оценки этих <br/>
						майлстоунов. Так, заказчик до начала проекта <br/>
						знает график проекта и этапность.
					</p>
				</div>
				
			</div>
		</div>
		);
};

export default StagesOfDevelopment;
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import '../css/pages/project.css'
import ProjectImageCard from '../components/ProjectImageCard.jsx'
import PlatformList from '../components/PlatformList.jsx'
import OrderForm from '../components/OrderForm'
import TestRequestPopup from '../components/Popups/TestRequestPopup.jsx';
import Popup from '../components/UI/Popup.jsx';

function Project({portfolio}) {
  const params = useParams();
  const cat = portfolio.find(cat => cat.title === params.category_title)
  const project = cat.projects.find(project => project.id == parseInt(params.id) );

  const [isTestReuqestPopupOpen, updateisTestReuqestPopupOpen] = useState(false);
  const handleOpenTestReuqestPopup = (e) => {
    console.log('handling');
    e.preventDefault();
    updateisTestReuqestPopupOpen(true);
  }
  const handleClosePopup = () => {
    updateisTestReuqestPopupOpen(false);
  }

  return (
    <div className='project-page-wrapper'>
      <div className='project-info'>
        <div className='project-info__header'>
          <h1 className='primary-heading'>{project.title}</h1>
          <p className='basic-text'>{project.description}</p>
          <PlatformList platforms={project.platforms}></PlatformList>
        </div>
        <div className='project-info__images'>
          {
            project.images.map(image =>
              <ProjectImageCard image={image} onOpenPopup={handleOpenTestReuqestPopup} key={image.title}></ProjectImageCard>
            )
          }
        </div>
      </div>
      <div className='project-video'>
        <iframe src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <section className="split-middle-flex project-page__cta">
        <div className='project-page__cta__text-container'>
            <h2 className='secondary-heading'>Свяжитесь с нами</h2>
            <p className='basic-text'>
                Проектируем промышленные симуляторы, игровой контент 
                  в виртуальной и дополненной реальности. Снижаем расходы за счет автоматизации, 
                  оптимизации мобильных приложений и веб-сервисов.
            </p>
        </div>
        <OrderForm 
          containerClass='project-page__cta__form'
          buttonClass='basic-button--blue'
        ></OrderForm>
      </section>
      {
            isTestReuqestPopupOpen &&
            <Popup containerClass="test-request-popup-wrapper" onClosePopup={handleClosePopup}>
                <TestRequestPopup ></TestRequestPopup>
            </Popup>
        }
    </div>
  )
}

export default Project

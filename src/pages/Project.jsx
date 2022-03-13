// import {withRouter} from 'react-router-dom'
import '../css/pages/project.css'
import ProjectImageCard from '../components/ProjectImageCard.jsx'
import PlatformList from '../components/PlatformList.jsx'


function Project({project}) {

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
              <ProjectImageCard image={image} key={image.title}></ProjectImageCard>
            )
          }
        </div>
      </div>
      <div className='project-video'>
        <iframe src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
    
  )
}

export default Project

// import {withRouter} from 'react-router-dom'
import '../css/pages/project.css'
import ProjectImageCard from '../components/ProjectImageCard.jsx'
import PlatformList from '../components/PlatformList.jsx'

function Project({project}) {
  console.log(project);
  return (
    <div className='project-info'>
      <div className='project-info__header'>
        <h1 className='primary-heading'>{project.title}</h1>
        <p className='text-basic'>{project.description}</p>
        <PlatformList platforms={project.platforms}></PlatformList>
      </div>
      <div className='project-info__images'>
        {
          project.images.map(image =>
            <ProjectImageCard image={image} key={image.title}></ProjectImageCard>
          )
        }
      </div>
      <div className='project-video'>
          <video autoPlay loop muted>
              <source src={project.video} type="video/mp4" />
          </video>
      </div>
    </div>
    
  )
}

export default Project

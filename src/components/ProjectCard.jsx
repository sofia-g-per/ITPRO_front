import React from 'react'
import {Link} from 'react-router-dom';
import '../css/project-card.css'
import PlatformList from './PlatformList.jsx'

export default function ProjectCard({project}) {
  console.log(project.images[0]);
  return (
    <div className='project-card'>
        <div className='project-card__image-container'>
            <img className='project-card__image' src={'http://itpro/storage/app/media/' +project.images[0].photo} />
            <img className='project-card__project-icon' src={project.project_icon.path} alt="" />
        </div>
        
        <div className='project-card__text-container'>
            <h3 className='tertiary-heading'>{project.title}</h3>
            <PlatformList platforms={project.platforms}></PlatformList>
            <p className='basic-text'>{project.description}</p>
            <Link className='link--blue' to='/project'>Подробнее</Link>
        </div>
    </div>
  )
}

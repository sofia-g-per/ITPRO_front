import React from 'react'
import '../css/project-card.css'


export default function ProjectImageCard({image}) {
  console.log(image)

  return (
    <div className='project-card'>
        <div className='project-card__image-container'>
            <img className='project-card__image' src={process.env.PUBLIC_URL + image.photo} alt="" />
        </div>
        
        <div className='project-card__text-container'>
            <h3 className='tertiary-heading'>{image.title}</h3>
            <p className='basic-text'>{image.description}</p>
            <a className='link--blue' href="#">Подробнее</a>
        </div>
    </div>
  )
}

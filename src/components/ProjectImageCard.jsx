import React from 'react'
import '../css/project-card.css'


export default function ProjectImageCard({image, onOpenPopup}) {

  return (
    <div className='project-card'>
        <div className='project-card__image-container'>
            <img className='project-card__image' src={'http://itpro/storage/app/media/' + image.photo} alt="" />
        </div>
        
        <div className='project-card__text-container'>
            <h3 className='tertiary-heading'>{image.title}</h3>
            <p className='basic-text'>{image.description}</p>
            <p className='link--blue' onClick={onOpenPopup}>Подробнее</p>
        </div>
    </div>
  )
}

import React from 'react'
import '../css/stage-of-dev.css';
import circle from '../img/pagination-circle.png'

export default function StageOfDev({stage}) {
  return (
    <div className='stage-of-dev'>
        <img className='stage-of-dev__circle' src={circle} alt="" />
        <h2 className='heading-secondary'>{stage.title}</h2>
        <p className='basic-text'>{stage.description}</p>
    </div>
  )
}

import React, { Component } from 'react'

export default function fileInput({fieldData, onChange}) {

    const {title} = fieldData;
    return (
      <div className='form__file-wrapper'>
        <div className='form__file-label-wrapper'>
          <label htmlFor={title} className='basic-text'>{title}</label>
        </div>
        <input onChange={onChange} id={title} className='visually-hidden' type="file" />
      </div>
    )
}
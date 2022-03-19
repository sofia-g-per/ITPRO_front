import React, { Component } from 'react'

export default function fileInput({fieldData, onChange}) {

    const {title, fieldName} = fieldData;
    return (
      <div className={`form__file-wrapper ${fieldData.error? 'form__field--error' : ''}`} >
        <div className='form__file-label-wrapper'>
          <label htmlFor={fieldName} className='basic-text'>{title}</label>
        </div>
        <input onChange={onChange} id={fieldName} name={fieldName} className='visually-hidden' type="file" />
      </div>
    )
}
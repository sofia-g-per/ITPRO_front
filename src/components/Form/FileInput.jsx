import React, { Component } from 'react'

export default class fileInput extends Component {

  render() {
    const {fieldData} = this.props;
    const {title} = fieldData;
    return (
      <div className='form__file-wrapper'>
        <div className='form__file-label-wrapper'>
          <label htmlFor={title} className='basic-text'>{title}</label>
        </div>
        <input id={title} className='visually-hidden' type="file" />
      </div>
    )
  }
}
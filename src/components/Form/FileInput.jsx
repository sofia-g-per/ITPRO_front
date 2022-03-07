import React, { Component } from 'react'

export default class fileInput extends Component {

  render() {
    const {fieldData} = this.props;
    const {title} = fieldData;
    return (
      <div className='form__file-wrapper'>
        <label for={title} className='form__file-label basic-text'>{title}</label>
        <input id={title} className='visually-hidden' type="file" />
      </div>
    )
  }
}
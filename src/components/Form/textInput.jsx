import React, {Component} from 'react';

class TextInput extends Component {

  render(){
    const {fieldData} = this.props;
    const {title} = fieldData;
    return (
      <input type="text" aria-label={title} placeholder={title} className="form__input basic-text" />
    );
  }

}

export default TextInput;

import React, {Component} from 'react';

class contactUs extends Component{
  // технологии должны выводится из api
  constructor(props){
    super(props);
    this.state = {
      select: '',
    }
  }

  doSomething(){

  }

  render() {
      const {fieldData} = this.props;
      const {select} = this.state;
      return (
        <select className='form__select basic-text form__field--error' aria-label={fieldData.title}>
          {!fieldData.value && <option value={fieldData.title} selected className='visually-hidden'>{fieldData.title}</option>}
          {fieldData.options.map( ({title}) => 
              <option className='basic-text' value={title} key={title}> {title} </option>
            )
          }
        </select>
      );
  }
}

export default contactUs;
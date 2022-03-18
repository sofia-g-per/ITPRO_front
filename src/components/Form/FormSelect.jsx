
import React from 'react';

function contactUs({fieldData, onChange}){
  // технологии должны выводится из api
  return (
    <select onChange={onChange} 
      className={`form__select basic-text ${fieldData.error? 'form__field--error' : ''}`} 
      name={fieldData.fieldName} aria-label={fieldData.title}
    >
      {!fieldData.value && <option value={fieldData.title} selected className='visually-hidden'>{fieldData.title}</option>}
      {fieldData.options.map( ({title}) => 
          <option className='basic-text' value={title} key={title}> {title} </option>
        )
      }
    </select>
  );
}

export default contactUs;
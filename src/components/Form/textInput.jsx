
function TextInput({fieldData, onChange}) {
  const {title, error, fieldName} = fieldData;
  return (
    <input onChange={onChange} type="text" aria-label={title} name={fieldName} placeholder={title} 
      className={`form__input basic-text ${error? 'form__field--error' : ''}`} />
  );

}

export default TextInput;
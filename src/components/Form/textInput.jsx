
function TextInput({fieldData, onChange}) {
  const {title, error} = fieldData;
  return (
    <input onChange={onChange} type="text" aria-label={title} name={title} placeholder={title} 
      className={`form__input basic-text ${error? 'form__field--error' : ''}`} />
  );

}

export default TextInput;
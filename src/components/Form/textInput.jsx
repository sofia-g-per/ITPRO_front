
function TextInput(props) {
  const {fieldData} = props;
  const {title} = fieldData;
  return (
    <input type="text" aria-label={title} placeholder={title} className="form__input basic-text" />
  );

}

export default TextInput;
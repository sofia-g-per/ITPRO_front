function Formfield({formField, children}) {
  return (
    <div className="form__field">
          {children} 
        <p className="form__field__error-label text--small">{formField.comment}</p>
    </div>
  );
  }
  
  export default Formfield;
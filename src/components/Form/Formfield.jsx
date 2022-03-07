function Formfield({children}) {
    return (
      <div className="form__field basic-text">
            {children} 
          <p className="form_error"></p>
      </div>
    );
  }
  
  export default Formfield;
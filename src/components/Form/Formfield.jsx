function Formfield({children}) {
    return (
      <div className="form__field">
            {children} 
          <p className="form_error text--small"></p>
      </div>
    );
  }
  
  export default Formfield;
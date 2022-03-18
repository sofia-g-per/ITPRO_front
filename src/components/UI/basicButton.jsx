
function BasicButton({title, buttonClass}) {
    return (
      <button className={`basic-button ${buttonClass}`}>
        {title}
      </button>
    );
  }
  
  export default BasicButton;
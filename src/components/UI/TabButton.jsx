import '../../css/UI/tab-button.css';

function TabButton({title, id, icon, isActive, onCategoryChange}){
    console.log(title, isActive)
    return(
        <button onClick={()=>{onCategoryChange(id)}} className={`tab-button ${isActive? 'tab-button--active' : ''}`}>
            {/* <img src={process.env.PUBLIC_URL + icon}/> */}
            <img src={icon.path}/>
            <span>{ title }</span>
        </button>
    );
}

export default TabButton;
import '../../css/UI/tab-button.css';

function TabButton({title, icon, isActive}){
    return(
        <button className={`tab-button ${isActive? 'tab-button--active' : ''}`}>
            {/* <img src={process.env.PUBLIC_URL + icon}/> */}
            <img src={icon.path}/>
            <span>{ title }</span>
        </button>
    );
}

export default TabButton;
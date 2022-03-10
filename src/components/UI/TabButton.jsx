import '../../css/UI/tab-button.css';

function TabButton({title, icon}){
    return(
        <button className="tab-button">
            <img src={icon}/>
            <span>{ title }</span>
        </button>
    );
}

export default TabButton;
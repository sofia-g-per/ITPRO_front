import React from 'react'
import { useState } from 'react'
import '../../css/UI/popup.css';
import xSVG from '../../img/x-button.svg'

export default function Popup({containerClass, children, onClosePopup}) {
    // const [isOpen, toggleIsOpen] = useState(true);
    // const closePopup = () => {
    //     toggleIsOpen(false);
    // }
  return (
      <React.Fragment>
        <div className={ 'page-overlay'}></div>
        <dialog className={`popup ${containerClass}`}>
            <button onClick={onClosePopup} className='x-button'>
                <img src={xSVG} alt="закрыть попап" />
            </button>
            {children}
        </dialog>
    </React.Fragment>
  )
}

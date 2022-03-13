import React from 'react'
import { useState } from 'react'
import '../../css/UI/popup.css';
import xSVG from '../../img/x-button.svg'

export default function Popup({containerClass, children}) {
    const [isOpen, toggleIsOpen] = useState(true);
    const closePopup = () => {
        toggleIsOpen(false);
    }
  return (
      <React.Fragment>
        <div className={ !isOpen? 'visually-hidden': 'page-overlay'}></div>
        <dialog className={ !isOpen? 'visually-hidden': `popup ${containerClass}`}>
            <button onClick={closePopup} className='x-button'>
                <img src={xSVG} alt="закрыть попап" />
            </button>
            {children}
        </dialog>
    </React.Fragment>
  )
}

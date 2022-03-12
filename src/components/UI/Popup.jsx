import React from 'react'
import '../../css/UI/popup.css';
import xSVG from '../../img/x-button.svg'

export default function Popup({containerClass, children}) {
  return (
      <React.Fragment>
        <div className='page-overlay'></div>
        <dialog className={'popup ' + containerClass} open>
            <button aria-label='закрыть попап' className='x-button'>
                <img src={xSVG} alt="закрыть попап" />
            </button>
            {children}
        </dialog>
    </React.Fragment>
  )
}

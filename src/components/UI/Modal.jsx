import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';


function Modal({ children, open, className = '' }) {
  return (

    const dialog = useRef();

    useEffect(()=>{
      if (open) {
        dialog.current.showModal();
      }
    }, [open]);

    createPortal(
      <dialog ref={dialog} open={open} className={`modal ${className}`}>
        {children}
      </dialog>, document.getElementById('modal'))
  );
}

export default Modal;
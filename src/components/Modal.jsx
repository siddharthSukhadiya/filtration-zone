import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

import './styles/Modal.css'

const Modal = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}><IoClose size={30} /></button>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

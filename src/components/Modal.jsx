import React from 'react'
import { IoClose } from 'react-icons/io5'

import './styles/Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}><IoClose /></button>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

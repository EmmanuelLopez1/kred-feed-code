import React from 'react'
import './Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { InputInfo } from '../InputInfo/InputInfo'

export const Input = ({ placeholder, type, icon, text, link, linkText }) => {
    return (
        <>
            <div className="mt-5 d-flex align-items-center justify-content-between">
                <input type={type && type || 'text'} className="input-title inputText" placeholder={placeholder} />
                <div className="input-icon-content">
                    <InputInfo text={text} link={link}/>
                    <FontAwesomeIcon icon={icon && faQuestion} className="input-icon text-secondary" />                
                </div>
            </div>
        </>
    )
}
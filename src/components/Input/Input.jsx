import React from 'react'
import './Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { InputInfo } from '../InputInfo/InputInfo'


export const Input = ({ placeholder, type, icon, text, link, handleChange, handleBlur, error, values, handleSubmit }) => {
    return (
        <>
            <label htmlFor="data" className="input-title mt-5 mb-1 text-secondary">{`${placeholder}:`}</label>
            <div className=" d-flex align-items-center justify-content-between">
                <input
                    type={type && type || 'text'}
                    className="input-title inputText"
                    name="data"
                    value={values.data}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    key={placeholder}
                />

                <div className="input-icon-content">
                    <InputInfo text={text} link={link} />
                    <FontAwesomeIcon icon={icon ? faQuestion : false} className="input-icon text-secondary" />
                </div>
            </div>
            {error ? <p className="input-error">{error.error}</p> : false}
        </>
    )
}
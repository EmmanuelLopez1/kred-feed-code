import React from 'react'
import './InputSelect.css'


export const InputSelect = ({ children, title }) => {
    return (
        <>
            <label htmlFor="select" className="input-title mt-5 mb-1 text-secondary">{title}</label>
            <select name="select" id="select" className="inputSelect w-100 text-secondary">
                {
                    children
                }
            </select>
        </>
    )
}
import React from 'react'
import './InputDate.css'


export const InputDate = ({title}) => {
    return (
        <>
            <div className="date d-flex flex-column">
                <label htmlFor="date" className="input-title mt-5 mb-1 text-secondary">{title}:</label>
                <input type="date" id="date" className="input-date text-secondary border-0 " name="" />
            </div>
        </>
    )
}
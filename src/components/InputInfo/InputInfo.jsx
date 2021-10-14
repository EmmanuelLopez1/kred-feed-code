import React from 'react'
import './InputInfo.css'

export const InputInfo = ({ text, link}) => {
    return (
        <>
            <div className="input-info">
                {text}
                <a href={link} target="_blank" className="input-info-link ms-2 text-secondary">Mas informacion</a>
            </div>
        </>
    )
}
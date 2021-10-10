import React, { useEffect } from 'react'
import './InputSelect.css'


export const InputSelect = ({ children }) => {
    return (
        <>
            <label htmlFor="select" className="input-title mt-5 mb-1 text-secondary">Ingresa tu genero</label>
            <select name="select" id="select" className="inputSelect w-100 text-secondary">
                {
                    children
                }
            </select>
        </>
    )
}
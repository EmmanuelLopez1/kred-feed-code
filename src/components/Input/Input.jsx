import React from 'react'
import './Input.css'

export const Input = ({placeholder, type})=>{
    return(
        <input type={type && type || 'text'} className="input-title inputText mt-5" placeholder={placeholder}/>
    )
}
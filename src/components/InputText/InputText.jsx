import React from 'react'
import './InputText.css'

export const InputText = ({placeholder})=>{
    return(
        <input type="text" className="input-title inputText mt-5" placeholder={placeholder}/>
    )
}
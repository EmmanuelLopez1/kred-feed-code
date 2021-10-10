import React from 'react'
import './InputText.css'

export const InputText = ({placeholder})=>{
    return(
        <input type="text" className="inputText mt-3" placeholder={placeholder}/>
    )
}
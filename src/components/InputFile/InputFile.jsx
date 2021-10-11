import React from 'react'
import './InputFile.css'

export const InputFile = ({title})=>{
    return(
        <>
            <label htmlFor="input-file" className="input-file-title text-secondary input-title mt-5 mb-2">{title}</label>
            <input type="file" name="" id="input-file" className="input-file"/>
        </>
    )
}
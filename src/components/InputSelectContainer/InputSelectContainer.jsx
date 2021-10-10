import React from 'react'
import {InputSelect} from '../InputSelect/InputSelect'

export const InputSelectContainer = ({options})=>{
    
    return(
        <InputSelect>
            {
                options.map(element =>{
                    return <option value="${element}">{element}</option>
                })            
            }
        </InputSelect>
    )
}
import React from 'react'
import {InputSelect} from '../InputSelect/InputSelect'

export const InputSelectContainer = ({options, title})=>{
    
    return(
        <InputSelect title={title}>
            {

                options.map(element =>{
                    return <option value={element} key={element}>{element}</option>
                })             

            }
        </InputSelect>
    )
}
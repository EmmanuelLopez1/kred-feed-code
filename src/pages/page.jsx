import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'


export const Page = ({children})=>{
    return(
        <>
            <Navbar/>
            {
                children
            }
        </>
    )
}
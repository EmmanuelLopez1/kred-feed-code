import React from "react";
import './Card.css'

export const Card = ({title, clases, children})=>{



    return(
        <div className={`card-form m-auto mt-3 border rounded p-4 ${clases}`}>
            <h2 className="text-center">{title}</h2>
            {children}
        </div>
    )
}
import React from "react";

export const Card = ({title, inputs})=>{
    return(
        <div className="Card m-auto w-75 mt-3 border border-1 border-primary rounded-2">
            <h2 className="text-center">{title}</h2>
        </div>
    )
}
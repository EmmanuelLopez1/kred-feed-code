import React from "react";
import './Card.css'


export const Card = ({ title, clases, children }) => {
    return (
        <div className={`card-form m-auto mt-3 border rounded p-4 ${clases}`}>
            <form action="">
                <h2 className="text-center text-secondary fs-2">{title}</h2>
                {children}
            </form>
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import { InputSelectContainer } from '../InputSelectContainer/InputSelectContainer'

export const Countries = ({title}) => {
    const [countries, setCountries] = useState()

    useEffect(() => {

        const getCountries = async () => {
            const countries = await fetch('https://restcountries.com/v3.1/all').then(res => res.json());

            const paises = countries.map(country => {
                return country.name.common
            })

            setCountries(paises)
        }

        getCountries()
    }, [])

    return (
        <>
            {
                countries && <InputSelectContainer options={countries} title={title}/>
            }
        </>
    )
}
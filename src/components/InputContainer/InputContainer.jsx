import React from 'react'
import { Formik } from 'formik'
import { Input } from '../Input/Input'


export const InputContainer = ({ placeholder, type, text, link, maxLength, icon}) => {

    const regexText = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    const regexNum = /[0-9]/
    const regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    
    const validateInput = (values) => {
        let errores = {}

        if (!values.data) {
            errores.error = 'El campo se encuentra vacio'
        } else if (true) {
            switch (type) {
                case 'tel':
                    validateNum(values, errores, maxLength)
                    break;

                case 'number':
                    validateNum(values, errores, maxLength)
                    break;
                
                case 'mail':
                    validateMail(values, errores)
                    break;

                default:
                    if (!regexText.test(values.data)) {
                        errores.error = 'Este campo solo puede contener letras y espacios'
                    }else{
                    }
                    break;
            }
        }



        return errores
    }

    const validateNum = (values, errores, maxLength) => {
        let num = ''
        console.log(values);

        for (let word in values.data) {
            if (regexNum.test(word)) {
                num += word
            }

            if (!regexNum.test(word)) {
                errores.error = 'Solo puedes ingresar numeros'
            }
            else if (num.length !== 10) {
                console.log(num.length);
                errores.error = `La longitud debe ser de ${maxLength} digitos`
            }

        }
    }

    const validateMail = (values, errores) => {

        if(!regexMail.test(values.data)){
            errores.error = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
        }
        
    }


    return (
        <>
            <Formik
                initialValues={{
                    data: ''
                }}

                validate={(values) => {
                    let errores = validateInput(values)
                    return errores
                }}

            >
                {({ values, errors, handleChange, handleBlur }) => (
                    <Input
                        icon={icon}
                        placeholder={placeholder}
                        text={text}
                        link={link}
                        type={type}
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        error={errors}
                    />
                )
                }
            </Formik>
        </>
    )
}
import React from 'react';
import { Card } from '../../components/Card/Card'
import { Input } from '../../components/Input/Input'
import { InputSelectContainer } from '../../components/InputSelectContainer/InputSelectContainer'
import { InputDate } from '../../components/InputDate/InputDate'
import { Countries } from '../../components/Countries/Countries'
import { InputFile } from '../../components/InputFile/InputFile'
import { FiscalData } from '../data/FiscalData.js';
import { InputContainer } from '../../components/InputContainer/InputContainer'

export const InformacionFiscal = () => {

    return (
        <>
                <div className="container mb-5">
                    <div className="row">
                        <h1 className="text-center my-5 text-info">Informacion Fiscal</h1>
                        <Card title="Informacion general" clases='col-lg-6'>
                            {
                                FiscalData.map(element => {
                                    return <InputContainer icon={true} placeholder={element.placeholder} text={element.text} link={element.link} />
                                })
                            }
                             <Countries title="Nacionalidad" />
                            <InputDate title="Fecha de constitucion" />
                            <InputContainer placeholder="Industria" />
                        </Card>

                        <Card title="Documentacion" clases='col-lg-5'>
                            <InputContainer placeholder="RFC" icon={true} text={'Obtener mi RFC'} link='' />
                            <InputFile title={'Comprobante de domicilio'} />
                        </Card>
                    </div>

                    <div className="row mt-5">
                        <Card title="Cuenta bancaria" clases='col-lg-6 sm-cards'>
                            <InputContainer placeholder="Ingresa tu cuenta CLABE" type="num" maxLength='16' />
                            <InputSelectContainer options={['Bancomer', 'Santander']} title="Seleccione su banco" />
                        </Card>

                        <Card title="Datos de contacto" clases="col-lg-5 sm-cards">
                            <InputContainer placeholder="Telefono" type="tel" />
                            <InputContainer placeholder="Correo Electronico" type="mail" />
                        </Card>
                    </div>
                </div>
        </>
    )
}
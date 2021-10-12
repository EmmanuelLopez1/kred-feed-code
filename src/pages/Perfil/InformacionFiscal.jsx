import React from 'react';
import { Card } from '../../components/Card/Card'
import { Input } from '../../components/Input/Input'
import { InputSelectContainer } from '../../components/InputSelectContainer/InputSelectContainer'
import { InputDate } from '../../components/InputDate/InputDate'
import { Countries } from '../../components/Countries/Countries'
import { InputFile } from '../../components/InputFile/InputFile'
import { FiscalData } from '../data/FiscalData.js';

export const InformacionFiscal = () => {
    console.log(FiscalData);

    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <h1 className="text-center mt-5">Informacion Fiscal</h1>
                    <Card title="Infromacion general" clases='col-lg-6'>
                        {
                            FiscalData.map(element =>{
                                return <Input icon={true} placeholder={element.placeholder} text={element.text} linkTo={element.link} />
                            })
                        }
                        <Countries title="Nacionalidad" />
                        <InputDate title="Fecha de constitucion"/>
                        <Input placeholder="Industria"/>
                    </Card>

                    <Card title="Documentacion" clases='col-lg-5'>
                        <Input placeholder="RFC" icon={true} text={'Obtener mi RFC'} link=''/>
                        <InputFile title={'Comprobante de domicilio'} />
                    </Card>
                </div>

                <div className="row mt-5">
                    <Card title="Cuenta bancaria" clases='col-lg-6 sm-cards'>
                        <Input placeholder="Ingresa tu cuenta CLABE" />
                        <InputSelectContainer options={['Bancomer', 'Santander']} title="Seleccione su banco" />
                    </Card>

                    <Card title="Datos de contacto" clases="col-lg-5 sm-cards">
                        <Input placeholder="Telefono" type="tel" />
                        <Input placeholder="Correo Electronico" type="mail" />
                    </Card>
                </div>
            </div>
        </>
    )
}
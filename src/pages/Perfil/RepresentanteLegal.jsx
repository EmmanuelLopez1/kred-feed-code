import React from 'react';
import { Card } from '../../components/Card/Card'
import { InputSelectContainer } from '../../components/InputSelectContainer/InputSelectContainer'
import { InputDate } from '../../components/InputDate/InputDate'
import { Countries } from '../../components/Countries/Countries'
import { InputFile } from '../../components/InputFile/InputFile'
import { InputContainer } from '../../components/InputContainer/InputContainer';

export const RepresentanteLegal = () => {
    return (
        <>
            <h1 className="text-center mt-5">Representante Legal</h1>
            <div className="container">

                <div className="row">
                    <Card title="Lugar de residencia" clases="col-lg-6">
                        <Countries title="Pais:" />
                        <InputContainer placeholder='Entidad Federativa o Estado' />
                        <InputContainer placeholder="Colonia o Urbanizacion" />
                        <InputContainer placeholder="Codigo Postal" type="number" />
                        <InputContainer placeholder="Calle" />
                        <InputContainer placeholder="Numero Ext." type="number"/>
                        <InputContainer placeholder="Numero Int." type="number"/>
                        <InputContainer placeholder="Numero Ext." type="number"/>
                    </Card>

                    <Card title="Informacion general" clases="col-lg-5">
                        <InputContainer placeholder="Nombre" />
                        <InputSelectContainer options={['Hombre', 'Mujer']} title="Genero" />
                        <InputDate title="Nacionalidad" />
                        <Countries title="Pais de Nacimiento" />
                        <InputSelectContainer options={['Casado/a', 'Divorciado/a', 'Soltero/a', 'Union libre', 'Viudo']} title='Estado civil:' />
                    </Card>
                </div>

                <div className="row mt-5">
                    <Card title="Documentacion" clases="col-lg-6">
                        <InputContainer placeholder="CURP" />
                        <InputContainer placeholder="RFC" />
                        <InputFile title={'Comprobante de domicilio'} />
                    </Card>

                    <Card title="Datos de contacto" clases="col-lg-5">
                        <InputContainer placeholder="Telefono" type="tel" maxLength={10}/>
                        <InputContainer placeholder="Correo Electronico" type="mail" />
                    </Card>
                </div>
                
                <div className="row my-5 d-flex justify-content-start">
                    <Card title="Cuenta bancaria" clases='col-lg-6 m-0'>
                        <InputContainer placeholder="Ingresa tu cuenta CLABE" />
                        <InputSelectContainer options={['Bancomer', 'Santander']} title="Seleccione su banco" />
                    </Card>
                </div>

            </div>
        </>
    )
}
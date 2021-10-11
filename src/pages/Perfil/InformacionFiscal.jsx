import React from 'react';
import { Card } from '../../components/Card/Card'
import { Input } from '../../components/Input/Input'
import { InputSelectContainer } from '../../components/InputSelectContainer/InputSelectContainer'
import { InputDate } from '../../components/InputDate/InputDate'
import { Countries } from '../../components/Countries/Countries'
import { InputFile } from '../../components/InputFile/InputFile'

export const InformacionFiscal = () => {
    const razonSocial = 'Es el nombre oficial por el que la empresa consta legalmente, es decir, la denominación que aparece en los documentos oficiales de constitución de la compañía como persona jurídica, y se inscribe en el Registro Público de la Propiedad y el Comercio.'

    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <h1 className="text-center mt-5">Informacion Fiscal</h1>
                    <Card title="Infromacion general" clases='col-lg-6'>
                        <Input placeholder="Razon social" icon={true} text={razonSocial}/>
                        <Input placeholder="Nombre comercial" />
                        <Countries title="Nacionalidad" />
                        <InputDate title="Fecha de constitucion" />
                        <Input placeholder="Regimen Fiscal" />
                        <Input placeholder="Industria" />
                    </Card>

                    <Card title="Documentacion" clases='col-lg-5'>
                        <Input placeholder="RFC" />
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
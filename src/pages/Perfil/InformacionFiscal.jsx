import React from 'react';
import { Card } from '../../components/Card/Card'
import { Input } from '../../components/Input/Input'
import { InputSelectContainer } from '../../components/InputSelectContainer/InputSelectContainer'
import { InputDate } from '../../components/InputDate/InputDate'
import { Countries } from '../../components/Countries/Countries'
import { InputFile } from '../../components/InputFile/InputFile'

export const InformacionFiscal = () => {
    return (
        <>
            <h1 className="text-center mt-5">Informacion Fiscal</h1>
            <Card title="Infromacion general">
                <Input placeholder="Razon social" />
                <Input placeholder="Nombre comercial" />
                <Countries title="Nacionalidad" />
                <InputDate title="Fecha de constitucion" />
                <Input placeholder="Regimen Fiscal" />
                <Input placeholder="Industria" />
            </Card>

            <Card title="Documentacion">
                <Input placeholder="RFC" />
                <InputFile title={'Comprobante de domicilio'} />
            </Card>

            <Card title="Cuenta bancaria">
                <Input placeholder="Ingresa tu cuenta CLABE" />
                <InputSelectContainer options={['Bancomer', 'Santander']} title="Seleccione su banco" />
            </Card>

            <Card title="Datos de contacto">
                <Input placeholder="Telefono" type="tel" />
                <Input placeholder="Correo Electronico" type="mail" />
            </Card>

        </>
    )
}
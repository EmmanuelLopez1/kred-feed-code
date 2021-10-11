import React from 'react';
import { Card } from '../../components/Card/Card'
import { Input } from '../../components/Input/Input'
import { InputSelectContainer } from '../../components/InputSelectContainer/InputSelectContainer'
import { InputDate } from '../../components/InputDate/InputDate'
import { Countries } from '../../components/Countries/Countries'
import { InputFile } from '../../components/InputFile/InputFile'

export const RepresentanteLegal = () => {
    return (
        <>
            <h1 className="text-center mt-5">Representante Legal</h1>
            <Card title="Informacion general">
                <Input placeholder="Nombre" />
                <InputSelectContainer options={['Hombre', 'Mujer']} title="Genero" />
                <InputDate title="Nacionalidad" />
                <Countries title="Pais de Nacimiento" />
                <InputSelectContainer options={['Casado/a', 'Divorciado/a', 'Soltero/a', 'Union libre', 'Viudo']} title='Estado civil:' />
            </Card>

            <Card title="Lugar de residencia">
                <Countries title="Pais:" />
                <Input placeholder='Entidad Federativa o Estado' />
                <Input placeholder="Colonia o Urbanizacion" />
                <Input placeholder="Codigo Postal" />
                <Input placeholder="Calle" />
                <Input placeholder="Numero Ext." />
                <Input placeholder="Numero Int." />
                <Input placeholder="Numero Ext." />
            </Card>

            <Card title="Datos de contacto">
                <Input placeholder="Telefono" type="tel" />
                <Input placeholder="Correo Electronico" type="mail" />
            </Card>

            <Card title="Documentacion">
                <Input placeholder="CURP" />
                <Input placeholder="RFC" />
                <InputFile title={'Comprobante de domicilio'} />
            </Card>

            <Card title="Cuenta bancaria">
                <Input placeholder="Ingresa tu cuenta CLABE" />
                <InputSelectContainer options={['Bancomer', 'Santander']} title="Seleccione su banco" />
            </Card>

        </>
    )
}
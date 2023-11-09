import React from 'react'
import FormularioUsuarios from '../../componentes/FormularioUsuarios/FormularioUsuarios'
import ListaUsuarios from '../../componentes/ListaUsuarios/ListaUsuarios'

const FormUsuarios = () => {
    return (
        <div class="container w-100">
            <div class="row">
                <div class="col">
                    <FormularioUsuarios/>
                </div>
                <div class="col">
                    <ListaUsuarios/>
                </div>
            </div>
        </div>
    )
}

export default FormUsuarios
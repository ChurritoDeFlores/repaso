import { useState } from "react"
import './FormularioUsuarios.css'
import { Guardar } from "../../servicios/Usuario_Service"


const FormularioUsuarios = () => {

    const [datosUsuario, setDatosUsuario] = useState({})

    const CargarUsuario = async(e)=>{
        e.preventDefault()
        await Guardar(datosUsuario?.nombre,datosUsuario?.pass,datosUsuario?.rol,datosUsuario?.estado)
    }

    return (
        <form className="card w-100 p-4">
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" onChange={(e)=>setDatosUsuario({...datosUsuario,nombre:e.target.value})}/>
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input type="password" className="form-control" onChange={(e)=>setDatosUsuario({...datosUsuario,pass:e.target.value})}/>
            </div>
            <div className="form-group">
                <label>Rol</label>
                <input type="text" className="form-control" placeholder="1: Administrador - 2: Usuario" onChange={(e)=>setDatosUsuario({...datosUsuario,rol:e.target.value})}/>
            </div>
            <div className="form-group">
                <label>Estado</label>
                <input type="text" className="form-control" onChange={(e)=>setDatosUsuario({...datosUsuario,estado:e.target.value})}/>
            </div>
            <button className="btn btn-primary" onClick={CargarUsuario}>Crear</button>
        </form>
    )
}

export default FormularioUsuarios
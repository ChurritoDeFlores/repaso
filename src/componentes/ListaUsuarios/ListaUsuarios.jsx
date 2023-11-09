import './ListaUsuarios.css'
import { useEffect, useState } from 'react'
import { Eliminar, Listar } from '../../servicios/Usuario_Service'

const ListaUsuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const [idUsuario, setIdUsuario] = useState(0)
    
    // Metodos (interactuan con la base de datos)
    const eliminarUsuario = async () => {
            if (idUsuario > 0) {
                await Eliminar(idUsuario);
            }
        };

    const listarUsuarios = async()=>{
        Listar().then((respuesta) =>{
            setUsuarios(respuesta)
        })
    }    
    // useEffect (al realizar un cambio actuan)
    useEffect(() => {
        eliminarUsuario();
    }, [idUsuario]);
    

    useEffect(()=>{
        listarUsuarios();
    },usuarios)

    return (
        <div className="card w-100">
            <div className="card-body">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">ID</th>
                            <th className="text-center" scope="col">Nombre</th>
                            <th className="text-center" scope="col">Rol</th>
                            <th className="text-center" scope="col">Estado</th>
                            <th className="text-center" scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario)=>{
                                return(
                                    <tr key={usuario.id}>
                                        <th className="text-center" scope="row">{usuario.id}</th>
                                        <td className="text-center">{usuario.name}</td>
                                        <td className="text-center">{usuario.role}</td>
                                        <td className="text-center">{usuario.status}</td>
                                        <td className="text-center">
                                            <button className='btn-danger' onClick={()=>{setIdUsuario(usuario.id)}}>
                                                <i class="bi bi-trash-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaUsuarios
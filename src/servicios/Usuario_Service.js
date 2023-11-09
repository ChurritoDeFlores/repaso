import { GET, POST, DELETE } from './httpr'

export const Listar = async() =>{

    let url = `/users`
    let rsp = await GET(url)
    return rsp
    
}

export const Guardar = async(name,pass,role,status) =>{
    let url = `/users`
    const roleNumber = typeof role === 'string' ? parseInt(role, 10) : role;
    let requestData = {
        name: name,
        password: pass,
        role: roleNumber,
        status: status
    }
    let rsp = await POST(url, requestData)
    return rsp
}

export const Eliminar = async(id) =>{
    let url = `/users/${id}`
    let rsp = await DELETE(url)
    return rsp
}

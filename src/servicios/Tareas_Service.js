import { GET } from "./httpr"

export const ListarTareas = async()=>{
    let url = `/tasks`
    let rsp = await GET(url)
    return rsp
}
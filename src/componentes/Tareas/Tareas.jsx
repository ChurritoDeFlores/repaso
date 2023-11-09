import { useEffect, useState } from "react"
import { ListarTareas } from "../../servicios/Tareas_Service"


const Tareas = () => {

    const [tareas, setTareas] = useState('')

    useEffect(()=>{
        
        setTareas(ListarTareas())
    },[])

    console.log(tareas)
    return (
        <div class="card">
            <div className="card-header">
                Fernando
            </div>
            <div class="card-body">
                <h3>
                    esta es la tarea que hay que hacer hoy
                </h3>
            </div>
        </div>
    )
}

export default Tareas
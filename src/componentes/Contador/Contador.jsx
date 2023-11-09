import { useState } from "react"
import "./Contador.css"

const Contador = () => {

    const [contador, setContador] = useState(0)


    return (
        <div className="card my-5 w-25">
            <div className="card-header text-center">
                Contador
            </div>
            <div className="card-body text-center">
                <h1>{contador}</h1>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <button className='btn btn-danger' onClick={()=>setContador(contador-1)}>
                    <i className="bi bi-dash-lg"></i>
                </button>
                <button className='btn btn-warning' onClick={()=>setContador(0)}>
                    <i class="bi bi-bootstrap-reboot"></i>
                </button>
                <button className='btn btn-success' onClick={()=>setContador(contador+1)}>
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>
        </div>
    )
}

export default Contador
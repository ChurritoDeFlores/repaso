import { useEffect, useState } from 'react'
import './Reloj.css'
import {ListaLugares, ObtenerHoraDe} from '../../servicios/Reloj_Service'

const Reloj = () => {

    const [hora, setHora] = useState('');
    const [minuto, setminuto] = useState('');
    const [segundos, setSegundos] = useState('')
    const [lugares, setLugares] = useState({})

    useEffect(()=>{
        setLugares(ListaLugares())
        console.log(lugares)
    },[])

    return (
        <div className="card my-5 w-25">
            <div className="card-header text-center">
                La hora actual es
            </div>
            <div className="card-body text-center">
                <h1>{hora}:{minuto}:{segundos}</h1>
            </div>
            <div className="card-footer text-center">
                Buenos Aires, Argentina
            </div>
        </div>
    )
}

export default Reloj
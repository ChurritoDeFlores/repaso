
import { GET } from "./httpr"

const urlBackEnd="http://api.timezonedb.com"

const apiKey ="EQP0QQSGHJIG"

export const ObtenerHoraDe = async(continente, ciudad) =>{
    let url = urlBackEnd+`${continente}/${ciudad}`
    try{
        let rsp = await GET(url)
        if (rsp){
            console.log(rsp)
            const { hour, minute, seconds, milliSeconds, timeZone, dayOfWeek } = rsp;
            console.log(`Hora en ${ciudad} (${continente}): ${hour}:${minute}:${seconds}.${milliSeconds}`);
            console.log(`Día de la semana: ${dayOfWeek}`);
            console.log(`Zona horaria: ${timeZone}`);
            return rsp
        } else {
            console.error('Error al obtener la hora');
        }
    } catch (error) {
        console.error('Error al obtener la hora:', error);
    }
}

export const ListaLugares = async()=>{
    let url = urlBackEnd + `/v2.1/list-time-zone?key=${apiKey}&format=json`
    console.log(url)
    try{
        let rsp = await GET("http://api.timezonedb.com/v2.1/list-time-zone?key=EQP0QQSGHJIG&format=json")//url)
        if (rsp){
            console.log(rsp)
            return rsp
        } else {
            console.error('Error al obtener la hora');
        }
    } catch (error) {
        console.error('Error al obtener la hora:', error);
    }
}



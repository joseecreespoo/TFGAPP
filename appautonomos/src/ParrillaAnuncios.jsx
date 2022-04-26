import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonAtras from "./BotonAtras";
import Anuncio from "./Anuncio.jsx";
import { useLocation } from "react-router-dom";
import {useState} from 'react';

function ParrillaAnuncios(props){
    
    let {search} = useLocation();

    let [respuesta,setRespuesta] = useState([]);


    function obtenerJson(){

        let query = new URLSearchParams(search);
    
        let codigoPostal = query.get("codigoPostal");
        let profesion = query.get("profesion");
        console.log(codigoPostal);
        console.log(profesion);
        
    
        let url= 'http://127.0.0.1:8000/buscarProfesional/'+codigoPostal+'/'+profesion;
    
        let form = new FormData();
        form.append("codigoPostalProfesional",codigoPostal);
        form.append("profesionProfesional",profesion);
    
        fetch(url, {
            method:'POST',
            body: form        
        }).then(res => res.json())
        .then(data => setRespuesta(data))
        .catch(error => console.error('Error: ',error));
        

    }


    const obtenerDatosEmpresas = async () =>{
    
        let query = new URLSearchParams(search);
    
        let codigoPostal = query.get("codigoPostal");
        let profesion = query.get("profesion");
        console.log(codigoPostal);
        console.log(profesion);

        let form = new FormData();
        form.append("codigoPostalProfesional",codigoPostal);
        form.append("profesionProfesional",profesion);

        let url= 'http://127.0.0.1:8000/buscarProfesional/'+codigoPostal+'/'+profesion;
        const datos = await fetch(url,{ method: 'POST', body: form });
        const profesionales = await datos.json();
        console.log(profesionales);
      }

    obtenerDatosEmpresas();





    return(
        <>
            <ul>
            {respuesta.map((resultado) =><li key={resultado.idOpcion}>
                <Anuncio 
                nombre={resultado.opcion} 
                descripcion={resultado.descripcion} 
                profesion={resultado.profesion} 
                direccion={resultado.direccion}
                precioHora={resultado.precioHora}
                telefono={resultado.telefono}
                 />
                </li>)}
            </ul>
            <BotonAtras></BotonAtras>
        </>
    )
}

export default ParrillaAnuncios;
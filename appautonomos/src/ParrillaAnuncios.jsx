import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonAtras from "./BotonAtras";
import Anuncio from "./Anuncio.jsx";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function ParrillaAnuncios(props){
    
    let {search} = useLocation();

    let [respuesta,setRespuesta] = useState();

    let query = new URLSearchParams(search);
    let codigoPostal = query.get("codigoPostal");
    let profesion = query.get("profesion");

    let form = new FormData();
    form.append("codigoPostalProfesional",codigoPostal);
    form.append("profesionProfesional",profesion);



    const obtenerRespuesta = async ()  =>{
        let url= 'http://127.0.0.1:8000/buscarProfesional/'+codigoPostal+'/'+profesion;
        await fetch(url,{
            method: 'POST',
            body: form
        })
        .then(response => response.json())
        .then(data => setRespuesta(data))
    }
    

    useEffect(() => {
        obtenerRespuesta();
        
    }, []);


    let profesionales;

    if(respuesta){
        console.log(respuesta[0])
        profesionales = respuesta.map(resultado => {
        return <li key={resultado.idProfesional}>
        <Anuncio 
        nombre={resultado.nombreProfesional}
        apellidos={resultado.apellidosProfesional} 
        descripcion={resultado.descripcionProfesional} 
        profesion={resultado.profesionProfesional} 
        direccion={resultado.direccionProfesional}
        precioHora={resultado.precioHoraProfesional}
        telefono={resultado.telefonoProfesional}
         />
        </li>});
        } else {
            return <h2>Cargando..</h2>
        }

    

    




    return(
        <>
            <ul>
            {profesionales}
            </ul>
            <BotonAtras></BotonAtras>
        </>
    )
}

export default ParrillaAnuncios;
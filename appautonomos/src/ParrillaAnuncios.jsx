import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Anuncio from "./Anuncio.jsx";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./app.css";
import Spinner from "./logos/spinner.gif";


function ParrillaAnuncios(props){
    
    //establecemos la busqueda
    let {search} = useLocation();

    let [respuesta,setRespuesta] = useState();

    let query = new URLSearchParams(search);
    let codigoPostal = query.get("codigoPostal");
    let profesion = query.get("profesion");

    let form = new FormData();
    form.append("codigoPostalProfesional",codigoPostal);
    form.append("profesionProfesional",profesion);


    //llamamos a la API
    const obtenerRespuesta = async ()  =>{
        let url= 'http://127.0.0.1:8000/buscarProfesional';
        await fetch(url,{
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                distritoProfesional : codigoPostal,
                profesionProfesional : profesion,
            })}).then(response => response.json())
        .then(data => setRespuesta(data))
    }

    //usamos use effect para obtener una respuesta
    useEffect(() => {
        obtenerRespuesta();
        
    }, []);


    let profesionales;

    if(respuesta){
        profesionales = respuesta.map(resultado => {
        return <li className="profesional" key={resultado.idProfesional}>
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
            return <div><img src={Spinner} alt="Cargando.."></img>
            </div>
        }

    

    




    return(
        <>
            <div className="contenedor">
                <ul className="listaProfesionales">
                {profesionales}
                </ul>
            </div>
            
                <Link to="/"className="botonAtras"><Button variant="light">Atrás</Button></Link>

        </>
    )
}

export default ParrillaAnuncios;
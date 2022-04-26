import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"
import Logo from './Logo.jsx';
import { Link,Route, Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import React, {useState} from 'react';



function Inicio(){



    const [peticion, setPeticion] = useState({
        codigoPostalProfesional: "",
        profesionProfesional:"",
    });


    const handleInputChange = (event) => {
        setPeticion({
            ...peticion,

            [event.target.name]: event.target.value
        })
    }

    const cambiarRuta=()=>{

        let codigoPostal = document.getElementById("codigoPostalProfesional").value;
        let profesion = document.getElementById("profesionProfesional").value;
        
        window.location.replace("/parrillaAnuncios?codigoPostal="+codigoPostal+"&profesion="+profesion);
    }



    return(
        <>
            
            <Logo></Logo>
            <div className='contenedorForm'>
                <Form id="formPeticion">
                <Form.Group className="mb-3">
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control type="number" onChange={handleInputChange} id="codigoPostalProfesional" name="codigoPostalProfesional"/>
                            <Form.Text className="text-muted">
                            Escribe el código postal de tu localidad.
                            </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                            <Form.Label>Profesional Requerido</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} id="profesionProfesional" name="profesionProfesional"/>
                </Form.Group>
                <Button variant="dark" onClick={cambiarRuta}>
                            Ver Profesionales
                </Button>
                </Form>


        </div>
            <div className='contenedorBotones'>
                <Link to="/login"><Button variant="light">Login</Button></Link>
                <Link to="/registro"><Button variant="light">Registrarme</Button></Link>
            </div>
            
        </>
    );
}

export default Inicio;
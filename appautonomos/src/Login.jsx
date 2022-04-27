import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from './Logo.jsx';
import BotonAtras from "./BotonAtras";
import React,{ useEffect } from "react";


function Login(){

    
    const enviarDatos = (event)=>{
        event.preventDefault();
        const url= 'http://127.0.0.1:8000/loginProfesional';

        fetch(url, {
            method:'POST',
            body: JSON.stringify({
                nombreProfesional: document.getElementById('emailProfesional').value,
                contrasenaProfesional: document.getElementById('contrasenaProfesional').value
            })       
        }).then(res => res.json())
        .catch(error => console.error('Error: ',error))
        .then(response=> console.log('Success: ',response));
        //window.location.replace("/");
    }



    return(
        <>
        <Logo></Logo>
        <div className='contenedorForm'>
        <Form id="formLogin" onSubmit={enviarDatos}>
        <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="emailProfesional"/>
                    <Form.Text className="text-muted">
                    Nunca compartiremos tu email con nadie.
                    </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" id="contrasenaProfesional"/>
                    <Form.Text className="text-muted">
                    Máximo 20 caracteres.
                    </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit">
                    Login
        </Button>


        </Form>

        </div>
        <BotonAtras></BotonAtras>
        </>
    )
}

export default Login;
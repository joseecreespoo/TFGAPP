import './inicio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from './Logo.jsx';
import React,{ useEffect} from "react";
import {useCookies} from "react-cookie";
import {Link} from "react-router-dom";

function Login(){
    
    //Declaramos el estado de si alguien esta logueado
    const [cookies,setCookie] = useCookies(['idProfesional']);


    
    //hacemos la llamada a la API
    const enviarDatos = (event)=>{
        event.preventDefault();
        const url= 'http://127.0.0.1:8000/loginProfesional';
        fetch(url, {
            method:'POST',
            mode:'cors',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                emailProfesional : document.getElementById('emailProfesional').value,
                contrasenaProfesional : document.getElementById('contrasenaProfesional').value,
            })    
        }).then(res => res.json())
        .catch(error => console.error('Error: ',error))
        .then(response =>{
            if(response !== "El usuario no existe"){
                let array = response
                console.log(array)
                console.log(array[0].idProfesional)
                setCookie('idProfesional',array[0].idProfesional,{path:'./login'})
            window.location.href="./panelControl";
            }
        })
    }

    //controlamos si esta conectado o no
    useEffect(() => {
        if(cookies.idProfesional !== undefined){
            window.location.href="./panelControl";
        } 
    },[cookies])

    



    return(
        <>
        <Logo></Logo>
        <div className="controles">
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
                <Link to="/"><Button variant="light">Atrás</Button></Link>
                </Form>
            </div>
        </div>
        
        </>
    )
        
}

export default Login;
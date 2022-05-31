import './inicio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"
import Logo from './Logo.jsx';
import { Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import React, {useState} from 'react';



function Inicio(){

    //Declaramos el estado de los anuncios

    const [peticion, setPeticion] = useState({
        codigoPostalProfesional: "",
        profesionProfesional:"",
    });

    //captamos los cambios que se ejercen en ellos 
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


                <Form.Group className="mb-3" controlId="distrito">
                    <Form.Label>Profesion</Form.Label>
                    <Form.Select onChange={handleInputChange} id="profesionProfesional" name="profesionProfesional">
                        <option value="1">Fontanero</option>
                        <option value="2">Carpintero</option>
                        <option value="3">Cristalero</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="distrito">
                    <Form.Label>Distrito</Form.Label>
                    <Form.Select onChange={handleInputChange} id="codigoPostalProfesional" name="codigoPostalProfesional">
                        <option value="1">CENTRO-METROPOLITANO</option>
                        <option value="2">NORDESTE</option>
                        <option value="3">SUR</option>
                    </Form.Select>
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
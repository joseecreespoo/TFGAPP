import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from './Logo.jsx';
import './inicio.css';
import {Link} from "react-router-dom";
//import {useState} from 'react';


function Registro(){

    //Funcion a implementar posteriormente
    /*
    const [file, setFile] = useState();

     
    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            let resultado = reader.result;
            let arrayDividido = resultado.split(',');
            setFile(arrayDividido[1]);
            //console.log(arrayDividido);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }
     
     


    const saveFile = (e) => {
        let imagen = e.target.files[0];
        setFile(getBase64(imagen));
        console.log(file)
        //console.log(imagenConvertida);
      };
    
    
    const enviarDatos1 = (event)=>{
    event.preventDefault();
    const url= 'http://127.0.0.1:8000/subirImagenProfesional';

    fetch(url, {
        method:'POST',
        mode:'cors',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            imagenProfesional: file
        })    
    }).then(res => res.json())
    .catch(error => console.error('Error: ',error))
    .then(response=> console.log('Success: ',response));
    //window.location.replace("/");
}
    */




    const enviarDatos = (event)=>{
        event.preventDefault();
        const url= 'http://127.0.0.1:8000/registroProfesional';

        fetch(url, {
            method:'POST',
            mode:'cors',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                nombreProfesional: document.getElementById('nombreProfesional').value,  
                apellidosProfesional: document.getElementById('apellidosProfesional').value,
                fechaNacimientoProfesional: document.getElementById('fechaNacimientoProfesional').value,
                profesionProfesional: document.getElementById('profesionProfesional').value,
                telefonoProfesional: document.getElementById('telefonoProfesional').value,
                distritoProfesional: document.getElementById('distritoProfesional').value,
                contrasenaProfesional: document.getElementById('contrasenaProfesional').value,
                descripcionProfesional: document.getElementById('descripcionProfesional').value,
                dniProfesional: document.getElementById('dniProfesional').value,
                direccionProfesional: document.getElementById('direccionProfesional').value,
                precioHoraProfesional: document.getElementById('precioHoraProfesional').value,
                publicado: document.getElementById('publicado').checked,
                emailProfesional: document.getElementById('emailProfesional').value,
            })    
        }).then(res => res.json())
        .catch(error => console.error('Error: ',error))
        .then(response=> console.log('Success: ',response));
        window.location.href="./login"
    }


    return(
        <>  
            <Logo></Logo>
            <div className='contenedorForm'>
            <Form id="registro" onSubmit={enviarDatos}>
                

                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombreProfesional" id="nombreProfesional"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" name="apellidosProfesional" id="apellidosProfesional"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Fecha Nacimiento</Form.Label>
                    <Form.Control type="date" name="fechaNacimientoProfesional" id="fechaNacimientoProfesional"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Profesion</Form.Label>
                    <Form.Select name="profesionProfesional" id="profesionProfesional">
                        <option value="1">Fontanero</option>
                        <option value="2">Carpintero</option>
                        <option value="3">Cristalero</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <Form.Control type="tel" name="telefonoProfesional" id="telefonoProfesional" />
                    <Form.Text className="text-muted">
                    Será el teléfono al que te llamarán los clientes.
                    </Form.Text>                
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Distrito</Form.Label>
                    <Form.Select name="distritoProfesional" id="distritoProfesional">
                        <option value="1">CENTRO-METROPOLITANO</option>
                        <option value="2">NORDESTE</option>
                        <option value="3">SUR</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" name="direccionProfesional" id="direccionProfesional" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} name="descripcionProfesional" id="descripcionProfesional"/>
                    <Form.Text className="text-muted">
                    Cuéntanos como eres.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" name="precioHoraProfesional" id="precioHoraProfesional" />
                    <Form.Text className="text-muted">
                    Indica en euros el precio de la hora de tu servicio.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" name="dniProfesional" id="dniProfesional"/>                    
                    <Form.Text className="text-muted">
                    Lo utilizamos para verificar tu identidad.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="emailProfesional" id="emailProfesional" />
                    <Form.Text className="text-muted">
                    Nunca compartiremos tu email con nadie.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="contrasenaProfesional" id="contrasenaProfesional"/>
                    <Form.Text className="text-muted">
                    Máximo 20 caracteres.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Publicar mi perfil al registrarme" name="publicado" id="publicado"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Acepto los términos y condiciones de Autonomos APP" />
                </Form.Group>


                <Button variant="dark" type="submit" className="botonRegistro">
                    Registrarme
                </Button>

                <Link to="/"><Button variant="light">Atrás</Button></Link>
            </Form>
            </div>
            

        </>



    );
}

export default Registro;
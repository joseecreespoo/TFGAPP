
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";


function Modificacion(props){

    //establecemos un usuario para nmodificar
    const [usuario,setUsuario] = useState({
        idProfesional: props.idProfesional,
        nombreProfesional: props.nombreProfesional,
        apellidoProfesional: props.apellidoProfesional,
        fechaNacimientoProfesional: props.fechaNacimientoProfesional,
        profesionProfesional: props.profesionProfesional,
        telefonoProfesional: props.telefonoProfesional,
        distritoProfesional: props.distritoProfesional,
        direccionProfesional: props.direccionProfesional,
        descripcionProfesional: props.descripcionProfesional,
        precioHoraProfesional: props.precioHoraProfesional,
        dniProfesional: props.dniProfesional,
        emailProfesional: props.emailProfesional,
        contrasenaProfesional: props.contrasenaProfesional,
        publicado: props.publicado,})


    const handleInputChange = (event)=>{

        //event.target.value  sirve para captar el valor continuamente
        setUsuario({

            //los tres puntos generan una pseudocopia de todos los parametros de empresa
            ...usuario,
            //el event.target.name detecta cada name y los relaciona con cada uno de los nombres en el hook
            [event.target.name] : event.target.value

        })

    }

    //llamamos a la api para modificar el usuario
    const enviarDatos = (event)=>{
        event.preventDefault();
        const url= 'http://127.0.0.1:8000/modificarProfesional';

        fetch(url, {
            method:'POST',
            mode:'cors',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                idProfesional: usuario.idProfesional,
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
                emailProfesional: document.getElementById('emailProfesional').value
            })    
        }).then(res => res.json())
        .catch(error => console.error('Error: ',error))
        .then(response=> {console.log('Success: ',response);
        alert("Has modificado los datos correctamente");
        });
    }

    

     


    return(
        <>  
            <Form id="formModificacion" onSubmit={enviarDatos} >

            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombreProfesional" id="nombreProfesional" defaultValue={props.nombreProfesional} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" name="apellidosProfesional" id="apellidosProfesional" defaultValue={props.apellidosProfesional} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Fecha Nacimiento</Form.Label>
                <Form.Control type="date" name="fechaNacimientoProfesional" id="fechaNacimientoProfesional" defaultValue={props.fechaNacimientoProfesional} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Profesion</Form.Label>
                <Form.Select name="profesionProfesional" id="profesionProfesional" defaultValue={props.profesionProfesional} onChange={handleInputChange}>
                    <option value="1">Fontanero</option>
                    <option value="2">Carpintero</option>
                    <option value="3">Cristalero</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Número de Teléfono</Form.Label>
                <Form.Control type="tel" name="telefonoProfesional" id="telefonoProfesional" defaultValue={props.telefonoProfesional} onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                Será el teléfono al que te llamarán los clientes.
                </Form.Text>                
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Distrito</Form.Label>
                <Form.Select name="distritoProfesional" id="distritoProfesional" defaultValue={props.distritoProfesional} onChange={handleInputChange}>
                    <option value="1">CENTRO-METROPOLITANO</option>
                    <option value="2">NORDESTE</option>
                    <option value="3">SUR</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" name="direccionProfesional" id="direccionProfesional" defaultValue={props.direccionProfesional} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} name="descripcionProfesional" id="descripcionProfesional" defaultValue={props.descripcionProfesional} onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                Cuéntanos como eres.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" name="precioHoraProfesional" id="precioHoraProfesional" defaultValue={props.precioHoraProfesional} onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                Indica en euros el precio de la hora de tu servicio.
                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>DNI</Form.Label>
                <Form.Control type="text" name="dniProfesional" id="dniProfesional" defaultValue={props.dniProfesional} onChange={handleInputChange}/>                    
                <Form.Text className="text-muted">
                Lo utilizamos para verificar tu identidad.
                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="emailProfesional" id="emailProfesional"  defaultValue={props.emailProfesional} onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                Nunca compartiremos tu email con nadie.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="contrasenaProfesional" id="contrasenaProfesional" defaultValue={props.contrasenaProfesional} onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                Máximo 20 caracteres.
                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Publicar mi perfil" name="publicado" id="publicado" />
            </Form.Group>


            <Button variant="dark" type="submit">
                Modificar mis datos
            </Button>
        </Form>

    </>



    );
}

export default Modificacion;
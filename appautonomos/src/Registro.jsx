import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from './Logo.jsx';
import BotonAtras from "./BotonAtras";
import Anuncio from "./Anuncio.jsx";


function Registro(){


    const enviarDatos = (event)=>{
        event.preventDefault();
        let form = new FormData(document.getElementById('registro'));
        let cuerpo = {
            nombreProfesional: form.get('nombreProfesional'),  
            apellidosProfesional: form.get('apellidosProfesional'),
            fechaNacimientoProfesional: form.get('fechaNacimientoProfesional'),
            profesionProfesional: form.get('profesionProfesional'),
            telefonoProfesional: form.get('telefonoProfesional'),
            distritoProfesional: form.get('distritoProfesional'),
            contrasenaProfesional: form.get('contrasenaProfesional'),
            descripcionProfesional: form.get('descripcionProfesional'),
            dniProfesional: form.get('dniProfesional'),
            direccionProfesional: form.get('direccionProfesional'),
            precioHoraProfesional: form.get('precioHoraProfesional'),
            publicado: form.get('publicado'),
            emailProfesional: form.get('emailProfesional')
        }
        
        
        const url= 'http://127.0.0.1:8000/crearProfesional';

        fetch(url, {
            method:'POST',
            data: form,
    
        }).then(res => res.json())
        .catch(error => console.error('Error: ',error))
        .then(response=> console.log('Success: ',response));
    
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



                <Button variant="dark" type="submit">
                    Registrarme
                </Button>
            </Form>
            </div>
            <BotonAtras></BotonAtras>

        </>



    );
}

export default Registro;
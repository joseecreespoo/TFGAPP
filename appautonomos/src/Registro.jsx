import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from './Logo.jsx';
import BotonAtras from "./BotonAtras";
import Anuncio from "./Anuncio.jsx";


function Registro(){
    return(
        <>  
            <Logo></Logo>
            <div className='contenedorForm'>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Fecha Nacimiento</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Profesion</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <Form.Control type="tel" />                    <Form.Text className="text-muted">
                    Será el teléfono al que te llamarán los clientes.
                    </Form.Text>                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Código Postal</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Form.Text className="text-muted">
                    Cuéntanos como eres.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="number"/>                    <Form.Text className="text-muted">
                    Lo utilizamos para verificar tu identidad.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                    <Form.Text className="text-muted">
                    Nunca compartiremos tu email con nadie.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" />
                    <Form.Text className="text-muted">
                    Máximo 20 caracteres.
                    </Form.Text>
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Acepto los términos y condiciones de Autonomos APP" />
                </Form.Group>


                <Button variant="dark" type="submit">
                    Registrarme
                </Button>
            </Form>
            </div>
            <BotonAtras></BotonAtras>
            <Anuncio></Anuncio>
        </>



    );
}

export default Registro;
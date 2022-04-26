import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from './Logo.jsx';
import BotonAtras from "./BotonAtras";

function Login(){
    return(
        <>
        <Logo></Logo>
        <div className='contenedorForm'>
        <Form>
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
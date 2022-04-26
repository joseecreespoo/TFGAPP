import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function BotonAtras(){
    return(
        <>
            <Link to="/"><Button variant="light">Atrás</Button></Link>
        </>
    )
}

export default BotonAtras;
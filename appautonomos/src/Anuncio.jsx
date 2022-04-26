import "./Inicio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import {ListGroup,ListGroupItem} from "reactstrap";
import Button from "react-bootstrap/Button";
import Logo from './logos/logocompleto.png';


function Anuncio(props){

    const telefono  = "tel:"+props.telefono+"";

    return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Logo} style={{height:'200px',width:'200px', margin:'3%', alignSelf: 'center'}}/>
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                {props.descripcion}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.profesion}</ListGroupItem>
                <ListGroupItem>{props.direccion}</ListGroupItem>
                <ListGroupItem>{props.precioHora}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <a href={telefono} ><Button variant="secondary">Contactar</Button></a>
            </Card.Body>
            </Card>
        </>
    )
}

export default Anuncio;
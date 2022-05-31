import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import {ListGroup,ListGroupItem} from "reactstrap";
import Button from "react-bootstrap/Button";
import imagen1 from './images/1.png';
import imagen2 from './images/2.png';
import imagen3 from './images/3.png';

//Declaramos el anuncio
function Anuncio(props){

    const telefono  = "tel:"+props.telefono+"";
    let imagenAsignada;
    
    //Asignamos la imagen correspondiente al anuncio
    if(props.profesion == 1){
        imagenAsignada = imagen1;
    } else if(props.profesion == 2){
        imagenAsignada = imagen3;
    } else if(props.profesion == 3){
        imagenAsignada = imagen2;
    }


    return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagenAsignada}  style={{height:'200px',width:'200px', margin:'3%', alignSelf: 'center'}}/>
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                {props.apellidos}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Descripción: {props.descripcion}</ListGroupItem>
                <ListGroupItem>Dirección: {props.direccion}</ListGroupItem>
                <ListGroupItem>Precio: {props.precioHora}€/Hora</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <a href={telefono} ><Button variant="secondary">Contactar</Button></a>
            </Card.Body>
            </Card>
        </>
    )
}

export default Anuncio;
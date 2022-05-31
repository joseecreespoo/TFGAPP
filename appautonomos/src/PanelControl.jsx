
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Logo from './Logo.jsx';
import React from "react";
import {useCookies} from "react-cookie";
import Modificacion from "./Modificacion";
import "./inicio.css"
import Spinner from "./logos/spinner.gif";

function PanelControl(){
    
    //establecemos un usuario e indicamos que vamos a usa cookies
    const [usuario, setUsuario] = React.useState(null);

    const [cookies,setCookie,removeCookie] = useCookies(['idProfesional']);


    function cerrarSesion(){
        removeCookie('idProfesional');
        window.location.href="./login";
    }
    //llamamois a la api
    const obtenerProfesional = async ()=>{

        const url= 'http://127.0.0.1:8000/obtencionLoginProfesional';
        const datos = await fetch(url, {
            method:'POST',
            mode:'cors',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                idProfesional: cookies.idProfesional
            })    
        });
        const profesional = await datos.json();
        setUsuario(profesional[0]);
        

    }

    //si el usuario no esta logueado lo volvemos al login
    React.useEffect(() => {


        if(cookies.idProfesional === undefined){
           window.location.href="./login"
        } else {
            obtenerProfesional();
        }
    
        
    },[])

    if(usuario !== null){

        return(
                <>  
                    <Logo></Logo>
                    <h3>¡Te damos la bienvenida !</h3>
                    <div className='contenedorForm'>
                        <Modificacion 
                        idProfesional={cookies.idProfesional}
                        nombreProfesional={usuario.nombreProfesional}
                        apellidosProfesional={usuario.apellidosProfesional}
                        fechaNacimientoProfesional={usuario.fechaNacimientoProfesional}
                        profesionProfesional={usuario.profesionProfesional}
                        telefonoProfesional={usuario.telefonoProfesional}
                        distritoProfesional={usuario.distritoProfesional}
                        direccionProfesional={usuario.direccionProfesional}
                        descripcionProfesional={usuario.descripcionProfesional}
                        precioHoraProfesional={usuario.precioHoraProfesional}
                        dniProfesional={usuario.dniProfesional}
                        emailProfesional={usuario.emailProfesional}
                        contrasenaProfesional={usuario.contrasenaProfesional}
                        publicado={usuario.publicado}
                        ></Modificacion>
                    <Button variant="light" onClick={cerrarSesion}>Cerrar sesión</Button>
                    </div>
                </>
            )

    } else {
        return <div><img src={Spinner} alt="Cargando.."></img>
        </div>
    }

    



    
    
}

export default PanelControl;
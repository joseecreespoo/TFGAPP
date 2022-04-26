import logo from './logos/logosinfondo.png'
import "./Inicio.css";


function Logo(){
    return(

        <>
            <div className='contenedorImagen'>
                <img src={logo} alt="logo" className="logoStyle"/>
            </div>
        </>



    );
}

export default Logo;
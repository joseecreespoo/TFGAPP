from distutils.command.config import config
from fastapi import FastAPI
from backend import *
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

#establecemos la configuracion para conectarnos por MYSQL a la base de datos



#generamos la conexion y el cursor, en caso de error devolvemos el error generado


    
#creamos la api

app = FastAPI()


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3000/parrillaAnuncios",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Login(BaseModel):
    emailProfesional: str
    contrasenaProfesional: str





################
#METODOS DE LA API
#################


#PROFESIONALES#


#obtener todos los profesionales

@app.get("/mostrarTodosProfesionales")

def getMostrarTodosProfesionales():
    return mostrarTodosProfesionales()

#crear un profesional

@app.post("/crearProfesional")

def postCrearProfesional(nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,distritoProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,precioHoraProfesional,publicado,emailProfesional):
    return crearProfesional(nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,distritoProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,precioHoraProfesional,publicado,emailProfesional)

#eliminar un profesional

@app.post("/eliminarProfesional/{dniProfesional}")

def postEliminarProfesional(dniProfesional):
    return eliminarProfesional(dniProfesional)

#modificar un profesional

@app.post("/modificarProfesional")

def postModificarProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,precioHoraProfesional,publicado,emailProfesional):
    return modificarProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,precioHoraProfesional,publicado,emailProfesional)

@app.post("/buscarProfesional/{distritoProfesional}/{profesionProfesional}")
async def postBuscarProfesional(distritoProfesional,profesionProfesional):
    return obtenerProfesional(distritoProfesional,profesionProfesional)


#logea el profesional

@app.post("/loginProfesional")
def loginProfesional(login:Login):
    return login
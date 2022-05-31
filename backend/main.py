from distutils.command.config import config
from fastapi import FastAPI
from backend import *
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
##################
#EXISTEN FUNCIONES SIN USAR PARA IMPLEMENTAR FUNCIONES A POSTERIOR 
##############
    
#creamos la api

app = FastAPI()

#guardamos los origenes desde los que no se habilitaran las cors

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3000/parrillaAnuncios",
]


#desactivamos las cors

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#creamos las clases necesarias
class Login(BaseModel):
    emailProfesional: str
    contrasenaProfesional: str


class Profesional(BaseModel):
    nombreProfesional: str
    apellidosProfesional: str
    fechaNacimientoProfesional : str
    profesionProfesional : str
    telefonoProfesional : int
    distritoProfesional : str
    contrasenaProfesional : str
    descripcionProfesional : str
    dniProfesional :str
    direccionProfesional : str
    precioHoraProfesional : int
    publicado : str
    emailProfesional : str
    
class ProfesionalModificar(BaseModel):
    idProfesional: int
    nombreProfesional: str
    apellidosProfesional: str
    fechaNacimientoProfesional : str
    profesionProfesional : str
    telefonoProfesional : int
    distritoProfesional : str
    contrasenaProfesional : str
    descripcionProfesional : str
    dniProfesional :str
    direccionProfesional : str
    precioHoraProfesional : int
    publicado : str
    emailProfesional : str
    


    
class ProfesionalId(BaseModel):
    idProfesional : str    
    
class ProfesionalBuscado(BaseModel):
    distritoProfesional : str
    profesionProfesional : str

    
################
#METODOS DE LA API
#################


#PROFESIONALES#


#obtener todos los profesionales

@app.get("/mostrarTodosProfesionales")

def getMostrarTodosProfesionales():
    return mostrarTodosProfesionales()

#crear un profesional

@app.post("/registroProfesional")

def postCrearProfesional(profesional:Profesional):
    return crearProfesional(profesional.nombreProfesional,
                            profesional.apellidosProfesional,
                            profesional.fechaNacimientoProfesional,
                            profesional.profesionProfesional,
                            profesional.telefonoProfesional,
                            profesional.distritoProfesional,
                            profesional.contrasenaProfesional,
                            profesional.descripcionProfesional,
                            profesional.dniProfesional,
                            profesional.direccionProfesional,
                            profesional.precioHoraProfesional,
                            profesional.publicado,
                            profesional.emailProfesional)


#eliminar un profesional

@app.post("/eliminarProfesional/{dniProfesional}")

def postEliminarProfesional(dniProfesional):
    return eliminarProfesional(dniProfesional)

#modificar un profesional

@app.post("/modificarProfesional")

def postModificarProfesional(profesionalModificar:ProfesionalModificar):
    return modificarProfesional(profesionalModificar.idProfesional,
                            profesionalModificar.nombreProfesional,
                            profesionalModificar.apellidosProfesional,
                            profesionalModificar.fechaNacimientoProfesional,
                            profesionalModificar.profesionProfesional,
                            profesionalModificar.telefonoProfesional,
                            profesionalModificar.distritoProfesional,
                            profesionalModificar.contrasenaProfesional,
                            profesionalModificar.descripcionProfesional,
                            profesionalModificar.dniProfesional,
                            profesionalModificar.direccionProfesional,
                            profesionalModificar.precioHoraProfesional,
                            profesionalModificar.publicado,
                            profesionalModificar.emailProfesional)

#busca un profesional
@app.post("/buscarProfesional")
async def postBuscarProfesional(profesionalBuscado:ProfesionalBuscado):
    return obtenerProfesional(profesionalBuscado.distritoProfesional,profesionalBuscado.profesionProfesional)


#logea el profesional

@app.post("/loginProfesional")
def loginProfesional(login:Login):
    return comprobarProfesional(login.emailProfesional,login.contrasenaProfesional)

#comprueba el login
@app.post("/obtencionLoginProfesional")
async def obtenerLoginProgesional(profesionalId:ProfesionalId):
    return obtenerProfesionalId(profesionalId.idProfesional)


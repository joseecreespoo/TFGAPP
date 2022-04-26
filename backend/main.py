from distutils.command.config import config
from colorama import Cursor
from fastapi import FastAPI
from backend import *
import pymysql
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware

#establecemos la configuracion para conectarnos por MYSQL a la base de datos

config = {
    'user': 'root',
    'password': 'root',
    'host': 'localhost',
    'unix_socket': '/Applications/MAMP/tmp/mysql/mysql.sock',
    'database': 'autonomos',
    'raise_on_warnings': True
}

#generamos la conexion y el cursor, en caso de error devolvemos el error generado

try:
    conexion = mysql.connector.connect(**config)
    
    cursor = conexion.cursor(dictionary=True)
    
    print("Se ha conectado correcatamente a la base de datos")
    
except pymysql.Error as error:
    
    print("Error al conectar a la base de datos, error: ",error)
    
#creamos la api

app = FastAPI()


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



################
#METODOS DE LA API
#################


#PROFESIONALES#


#obtener todos los profesionales

@app.get("/mostrarTodosProfesionales")

def getMostrarTodosProfesionales():
    return mostrarTodosProfesionales(conexion)

#crear un profesional

@app.post("/crearProfesional")

def postCrearProfesional(nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional):
    return crearProfesional(nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,conexion)

#eliminar un profesional

@app.post("/eliminarProfesional/{dniProfesional}")

def postEliminarProfesional(dniProfesional):
    return eliminarProfesional(dniProfesional,conexion)

#modificar un profesional

@app.post("/modificarProfesional")

def postModificarProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional):
    return modificarProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,conexion)

@app.post("/buscarProfesional/{codigoPostalProfesional}/{profesionProfesional}")
def postBuscarProfesional(codigoPostalProfesional,profesionProfesional):
    return obtenerProfesional(conexion,codigoPostalProfesional,profesionProfesional)


#EMPLEOS#

#mostrar todos los empleos

@app.get("/mostrarTodosEmpleos")

def getMostrarTodosEmpleos():
    return mostrarTodosEmpleos(conexion)


#crear un empleo

@app.post("/crearEmpleo")

def postCrearEmpleo(nombreEmpleo,precioHora):
    return crearEmpleo(nombreEmpleo,precioHora,conexion)

#eliminar un empleo

@app.post("/eliminarEmpleo/{idEmpleo}")
def postEliminarEmpleo(idEmpleo):
    return eliminarEmpleo(idEmpleo,conexion)

#modificar un empleo

@app.post("/modificarEmpleo/")
def postModificarEmpleo(idEmpleo,nombreEmpleo,precioHora):
    return modificarEmpleo(idEmpleo,nombreEmpleo,precioHora,conexion)


#USUARIOS#

#mostrar todos los usuarios

@app.get("/mostrarTodosUsuarios")

def getMostrarTodosUsuarios():
    return mostrarTodosUsuarios(conexion)

#crear un usuario

@app.post("/crearUsuario")

def postCrearUsuario(dniUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,direccionUsuario,contrasenaUsuario,telefonoUsuario,codigoPostalUsuario):
    return crearUsuario(dniUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,direccionUsuario,contrasenaUsuario,telefonoUsuario,codigoPostalUsuario,conexion)

#eliminar un usuario

@app.post("/eliminarUsuario/{dniUsuario}")

def postEliminarUsuario(dniUsuario):
    return eliminarUsuario(dniUsuario,conexion)

#modificar un usuario  

@app.post("/modificarUsuario")


def postModificarUsuario(idUsuario,dniUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,direccionUsuario,contrasenaUsuario,telefonoUsuario,codigoPostalUsuario):
    return modificarUsuario(idUsuario,dniUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,direccionUsuario,contrasenaUsuario,telefonoUsuario,codigoPostalUsuario,conexion)
    

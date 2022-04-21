from distutils.command.config import config
from colorama import Cursor
from fastapi import FastAPI
from backend import *
import pymysql
import mysql.connector

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


################
#METODOS DE LA API
#################


#PROFESIONALES#


#obtener todos los profesionales

@app.get("/mostrarTodosProfesionales")

def getMostrarTodosProfesionales():
    return mostrarTodosProfesionales(conexion)

#crear un profesional

@app.post("/crearProfesional/{idProfesional}/{nombreProfesional}/{apellidosProfesional}/{fechaNacimientoProfesional}/{profesionProfesional}/{telefonoProfesional}/{codigoPostalProfesional}/{contrasenaProfesional}/{descripcionProfesional}/{dniProfesional}/{direccionProfesional}")

def postCrearProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional):
    return crearProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,conexion)

#eliminar un profesional

@app.post("/eliminarProfesional/{idProfesional}")

def postEliminarProfesional(idProfesional):
    return eliminarProfesional(idProfesional,conexion)

#modificar un profesional

@app.post("/modificarProfesional/{idProfesional}/{nombreProfesional}/{apellidosProfesional}/{fechaNacimientoProfesional}/{profesionProfesional}/{telefonoProfesional}/{codigoPostalProfesional}/{contrasenaProfesional}/{descripcionProfesional}/{dniProfesional}/{direccionProfesional}")

def postModificarProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional):
    return modificarProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,conexion)



#EMPLEOS#

#mostrar todos los empleos

@app.get("/mostrarTodosEmpleos")

def getMostrarTodosEmpleos():
    return mostrarTodosEmpleos(conexion)


#crear un empleo

@app.post("/crearEmpleo/{idEmpleo}/{nombreEmpleo}/{apellidosEmpleo}/{fechaNacimientoEmpleo}/{profesionEmpleo}/{telefonoEmpleo}/{codigoPostalEmpleo}/{contrasenaEmpleo}/{descripcionEmpleo}/{dniEmpleo}/{direccionEmpleo}")

def postCrearEmpleo(idEmpleo,nombreEmpleo,descripcionEmpleo,fechaInicioEmpleo,fechaFinEmpleo,idProfesional,idCliente):
    return crearEmpleo(idEmpleo,nombreEmpleo,descripcionEmpleo,fechaInicioEmpleo,fechaFinEmpleo,idProfesional,idCliente,conexion)

#eliminar un empleo

@app.post("/eliminarEmpleo/{idEmpleo}")
def postEliminarEmpleo(idEmpleo):
    return eliminarEmpleo(idEmpleo,conexion)

#modificar un empleo

@app.post("/modificarEmpleo/{idEmpleo}/{nombreEmpleo}/{apellidosEmpleo}/{fechaNacimientoEmpleo}/{profesionEmpleo}/{telefonoEmpleo}/{codigoPostalEmpleo}/{contrasenaEmpleo}/{descripcionEmpleo}/{dniEmpleo}/{direccionEmpleo}")
def postModificarEmpleo(idEmpleo,nombreEmpleo,apellidosEmpleo,fechaNacimientoEmpleo,profesionEmpleo,telefonoEmpleo,codigoPostalEmpleo,contrasenaEmpleo,descripcionEmpleo,dniEmpleo,direccionEmpleo):
    return modificarEmpleo(idEmpleo,nombreEmpleo,apellidosEmpleo,fechaNacimientoEmpleo,profesionEmpleo,telefonoEmpleo,codigoPostalEmpleo,contrasenaEmpleo,descripcionEmpleo,dniEmpleo,direccionEmpleo,conexion)


#USUARIOS#

#mostrar todos los usuarios

@app.get("/mostrarTodosUsuarios")

def getMostrarTodosUsuarios():
    return mostrarTodosUsuarios(conexion)

#crear un usuario

@app.post("/crearUsuario/{idUsuario}/{nombreUsuario}/{apellidosUsuario}/{fechaNacimientoUsuario}/{profesionUsuario}/{telefonoUsuario}/{codigoPostalUsuario}/{contrasenaUsuario}/{descripcionUsuario}/{dniUsuario}/{direccionUsuario}")

def postCrearUsuario(idUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,profesionUsuario,telefonoUsuario,codigoPostalUsuario,contrasenaUsuario,descripcionUsuario,dniUsuario,direccionUsuario):
    return crearUsuario(idUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,profesionUsuario,telefonoUsuario,codigoPostalUsuario,contrasenaUsuario,descripcionUsuario,dniUsuario,direccionUsuario,conexion)

#eliminar un usuario

@app.post("/eliminarUsuario/{idUsuario}")

def postEliminarUsuario(idUsuario):
    return eliminarUsuario(idUsuario,conexion)

#modificar un usuario  

@app.post("/modificarUsuario/{idUsuario}/{nombreUsuario}/{apellidosUsuario}/{fechaNacimientoUsuario}/{profesionUsuario}/{telefonoUsuario}/{codigoPostalUsuario}/{contrasenaUsuario}/{descripcionUsuario}/{dniUsuario}/{direccionUsuario}")


def postModificarUsuario(idUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,profesionUsuario,telefonoUsuario,codigoPostalUsuario,contrasenaUsuario,descripcionUsuario,dniUsuario,direccionUsuario):
    return modificarUsuario(idUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,profesionUsuario,telefonoUsuario,codigoPostalUsuario,contrasenaUsuario,descripcionUsuario,dniUsuario,direccionUsuario,conexion)
    
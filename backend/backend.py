import json
import pymysql
import mysql.connector
from distutils.command.config import config
from backend import *
import mysql.connector
import base64






#CREAMOS UN DICCIONARIO PARA CONECTARNOS A LA BASE DE DATOS
config = {
    'user': 'root',
    'password': 'root',
    'host': 'localhost',
    'unix_socket': '/Applications/MAMP/tmp/mysql/mysql.sock',
    'database': 'autonomos',
    'raise_on_warnings': True
}


#REALIZAMOS LA CONEXION

try:
    conexion = mysql.connector.connect(**config)
    
    cursor = conexion.cursor(dictionary=True)
    
    print("Se ha conectado correcatamente a la base de datos")
    
except pymysql.Error as error:
    
    print("Error al conectar a la base de datos, error: ",error)



#################
# FUNCIONES #
#################


def mostrarTodosProfesionales ():
    try:
        select = "SELECT * FROM autonomos.Profesionales"
        curr = conexion.cursor()
        curr.execute(select)
        rows = curr.fetchall()
        
        listaProfesionales = []
        
        for row in rows :
            
            jsonDevuelto = {
                "idProfesional": row[0],
                "nombreProfesional": row[1],
                "apellidosProfesional": row[2],
                "fechaNacimientoProfesional": row[3],
                "profesionProfesional": row[4],
                "telefonoProfesional": row[5],
                "distritoProfesional": row[6],
                "contrasenaProfesional": row[7],
                "descripcionProfesional": row[8],
                "dniProfesional": row[9],
                "direccionProfesional": row[10],
                "precioHoraProfesional": row[11],
                "publicado": row[12],
                "emailProfesional": row[13]
            }
            
            listaProfesionales.append(jsonDevuelto)
        conexion.commit()
        
        return listaProfesionales
        
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al obtener los profesionales, error: ",error)
    
    

#funcion para obtener un profesional en concreto 
    
    
def obtenerProfesional(distritoProfesional,profesionProfesional):
    try:
        select = f"SELECT * FROM autonomos.Profesionales WHERE profesionProfesional = '{profesionProfesional}' AND distritoProfesional = '{distritoProfesional}' AND publicado = 'True'"
        curr = conexion.cursor()
        curr.execute(select)
        rows = curr.fetchall()
        listaProfesionales = []
        
        for row in rows :
            
            jsonDevuelto = {
                "idProfesional": row[0],
                "nombreProfesional": row[1],
                "apellidosProfesional": row[2],
                "fechaNacimientoProfesional": row[3],
                "profesionProfesional": row[4],
                "telefonoProfesional": row[5],
                "distritoProfesional": row[6],
                "contrasenaProfesional": row[7],
                "descripcionProfesional": row[8],
                "dniProfesional": row[9],
                "direccionProfesional": row[10],
                "precioHoraProfesional": row[11],
                "publicado": row[12],
                "emailProfesional": row[13]
            }
            
            listaProfesionales.append(jsonDevuelto)
        conexion.commit()
        
        return listaProfesionales

    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al obtener los profesionales, error: ",error)


def crearProfesional(nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,distritoProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,precioHoraProfesional,publicado,emailProfesional):
    try:
        insert = f"INSERT INTO autonomos.Profesionales (nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,distritoProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,precioHoraProfesional,publicado,emailProfesional) VALUES ('{nombreProfesional}','{apellidosProfesional}','{fechaNacimientoProfesional}','{profesionProfesional}','{telefonoProfesional}','{distritoProfesional}','{contrasenaProfesional}','{descripcionProfesional}','{dniProfesional}','{direccionProfesional}','{precioHoraProfesional}','{publicado}','{emailProfesional}')"
        curr = conexion.cursor()
        curr.execute(insert)
        conexion.commit()
        
        return("Profesional creado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al crear el profesional, error: ",error)
    

def eliminarProfesional(dniProfesional):
    try:
        delete = f"DELETE FROM autonomos.Profesionales WHERE dniProfesional = '{dniProfesional}'"
        curr = conexion.cursor()
        curr.execute(delete)
        conexion.commit()
        
        return("Profesional eliminado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al eliminar el profesional, error: ",error)
    

def modificarProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,distritoProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,precioHoraProfesional,publicado,emailProfesional):
    try:
        update = f"UPDATE autonomos.Profesionales SET nombreProfesional = '{nombreProfesional}', apellidosProfesional = '{apellidosProfesional}', fechaNacimientoProfesional = '{fechaNacimientoProfesional}', profesionProfesional = '{profesionProfesional}', telefonoProfesional = '{telefonoProfesional}', distritoProfesional = '{distritoProfesional}', contrasenaProfesional = '{contrasenaProfesional}', descripcionProfesional = '{descripcionProfesional}', dniProfesional = '{dniProfesional}', direccionProfesional = '{direccionProfesional}' ,precioHoraProfesional = '{precioHoraProfesional}', publicado = '{publicado}', emailProfesional = '{emailProfesional}' WHERE idProfesional = '{idProfesional}'"
        curr = conexion.cursor()
        curr.execute(update)
        conexion.commit()
        
        return("Profesional modificado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al modificar el profesional, error: ",error)
 

def comprobarProfesional(emailProfesional,contrasenaProfesional):
    try:
        select = f"SELECT * FROM autonomos.Profesionales WHERE emailProfesional = '{emailProfesional}' AND contrasenaProfesional = '{contrasenaProfesional}' "
        curr = conexion.cursor()
        curr.execute(select)
        rows = curr.fetchall()
        listaProfesionales = []
        for row in rows :
            
            jsonDevuelto = {
                "idProfesional": row[0],
                "nombreProfesional": row[1],
                "apellidosProfesional": row[2],
                "fechaNacimientoProfesional": row[3],
                "profesionProfesional": row[4],
                "telefonoProfesional": row[5],
                "distritoProfesional": row[6],
                "contrasenaProfesional": row[7],
                "descripcionProfesional": row[8],
                "dniProfesional": row[9],
                "direccionProfesional": row[10],
                "precioHoraProfesional": row[11],
                "publicado": row[12],
                "emailProfesional": row[13]
            }
            
            listaProfesionales.append(jsonDevuelto)
        conexion.commit()
        
        if (listaProfesionales.__len__() != 0):
            return(listaProfesionales)
        else:
            return "El usuario no existe"

    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al obtener los profesionales, error: ",error)
    
    
    
def obtenerProfesionalId(idProfesional):
    try:
        select = f"SELECT * FROM autonomos.Profesionales WHERE idProfesional = '{idProfesional}'"
        curr = conexion.cursor()
        curr.execute(select)
        rows = curr.fetchall()
        listaProfesionales = []
        
        for row in rows :
            
            jsonDevuelto = {
                "idProfesional": row[0],
                "nombreProfesional": row[1],
                "apellidosProfesional": row[2],
                "fechaNacimientoProfesional": row[3],
                "profesionProfesional": row[4],
                "telefonoProfesional": row[5],
                "distritoProfesional": row[6],
                "contrasenaProfesional": row[7],
                "descripcionProfesional": row[8],
                "dniProfesional": row[9],
                "direccionProfesional": row[10],
                "precioHoraProfesional": row[11],
                "publicado": row[12],
                "emailProfesional": row[13]
            }
            
            listaProfesionales.append(jsonDevuelto)
        conexion.commit()
        
        return listaProfesionales

    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al obtener los profesionales, error: ",error)


    
    
    
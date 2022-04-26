import json
import pymysql


#Archivo con las funciones que llaman a la base de datos

#################
# Profesionales #
#################


def mostrarTodosProfesionales (conexion):
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
                "codigoPostalProfesional": row[6],
                "contrasenaProfesional": row[7],
                "descripcionProfesional": row[8],
                "dniProfesional": row[9],
                "direccionProfesional": row[10]
            }
            
            listaProfesionales.append(jsonDevuelto)
        conexion.commit()
        
        return listaProfesionales
        
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al obtener los profesionales, error: ",error)
    
    

#funcion para obtener un profesional en concreto 
    
    
def obtenerProfesional(conexion,codigoPostalProfesional,profesionProfesional):
    try:
        select = f"SELECT * FROM autonomos.Profesionales WHERE profesionProfesional = '{profesionProfesional}' AND codigoPostalProfesional = '{codigoPostalProfesional}' "
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
                "codigoPostalProfesional": row[6],
                "contrasenaProfesional": row[7],
                "descripcionProfesional": row[8],
                "dniProfesional": row[9],
                "direccionProfesional": row[10]
            }
            
            listaProfesionales.append(jsonDevuelto)
        conexion.commit()
        
        return listaProfesionales

    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al obtener los profesionales, error: ",error)


def crearProfesional(nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,conexion):
    try:
        insert = f"INSERT INTO autonomos.Profesionales (nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional) VALUES ('{nombreProfesional}','{apellidosProfesional}','{fechaNacimientoProfesional}','{profesionProfesional}','{telefonoProfesional}','{codigoPostalProfesional}','{contrasenaProfesional}','{descripcionProfesional}','{dniProfesional}','{direccionProfesional}')"
        curr = conexion.cursor()
        curr.execute(insert)
        conexion.commit()
        
        return("Profesional creado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al crear el profesional, error: ",error)
    

def eliminarProfesional(dniProfesional,conexion):
    try:
        delete = f"DELETE FROM autonomos.Profesionales WHERE dniProfesional = '{dniProfesional}'"
        curr = conexion.cursor()
        curr.execute(delete)
        conexion.commit()
        
        return("Profesional eliminado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al eliminar el profesional, error: ",error)
    

def modificarProfesional(idProfesional,nombreProfesional,apellidosProfesional,fechaNacimientoProfesional,profesionProfesional,telefonoProfesional,codigoPostalProfesional,contrasenaProfesional,descripcionProfesional,dniProfesional,direccionProfesional,conexion):
    try:
        update = f"UPDATE autonomos.Profesionales SET nombreProfesional = '{nombreProfesional}', apellidosProfesional = '{apellidosProfesional}', fechaNacimientoProfesional = '{fechaNacimientoProfesional}', profesionProfesional = '{profesionProfesional}', telefonoProfesional = '{telefonoProfesional}', codigoPostalProfesional = '{codigoPostalProfesional}', contrasenaProfesional = '{contrasenaProfesional}', descripcionProfesional = '{descripcionProfesional}', dniProfesional = '{dniProfesional}', direccionProfesional = '{direccionProfesional}' WHERE idProfesional = '{idProfesional}'"
        curr = conexion.cursor()
        curr.execute(update)
        conexion.commit()
        
        return("Profesional modificado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al modificar el profesional, error: ",error)

#################
# Empleos #
#################

def mostrarTodosEmpleos (conexion):
    try:
        select = "SELECT * FROM autonomos.Empleos"
        curr = conexion.cursor()
        curr.execute(select)
        rows = curr.fetchall()
        
        listaEmpleos = []
        
        for row in rows :
            
            jsonDevuelto = {
                "idEmpleo": row[0],
                "nombreEmpleo": row[1],
                "precioHora": row[2],
            }
            
            listaEmpleos.append(jsonDevuelto)
        conexion.commit()
        
        return listaEmpleos
        
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al obtener los empleos, error: ",error)
    

def crearEmpleo(nombreEmpleo,precioHora,conexion):
    try:
        insert = f"INSERT INTO autonomos.Empleos (nombreEmpleo,precioHora) VALUES ('{nombreEmpleo}','{precioHora}')"
        curr = conexion.cursor()
        curr.execute(insert)
        conexion.commit()
        
        return("Empleo creado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al crear el empleo, error: ",error)
    

def eliminarEmpleo(idEmpleo,conexion):
    try:
        delete = f"DELETE FROM autonomos.Empleos WHERE idEmpleo = '{idEmpleo}'"
        curr = conexion.cursor()
        curr.execute(delete)
        conexion.commit()
        
        return("Empleo eliminado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al eliminar el empleo, error: ",error)
    

def modificarEmpleo(idEmpleo,nombreEmpleo,precioHora,conexion):
    try:
        update = f"UPDATE autonomos.Empleos SET nombreEmpleo = '{nombreEmpleo}', precioHora = '{precioHora}' WHERE idEmpleo = '{idEmpleo}'"
        curr = conexion.cursor()
        curr.execute(update)
        conexion.commit()
        
        return("Empleo modificado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al modificar el empleo, error: ",error)
    
#################
# Usuarios #
#################

def mostrarTodosUsuarios(conexion):
    try:
        select = "SELECT * FROM autonomos.Usuarios"
        curr = conexion.cursor()
        curr.execute(select)
        rows = curr.fetchall()
        
        listaUsuarios = []
        
        for row in rows :
            
            jsonDevuelto = {
                "idUsuario": row[0],
                "dniUsuario": row[1],
                "nombreUsuario": row[2],
                "apellidosUsuario": row[3],
                "direccionUsuario": row[4],
                "contrasenaUsuario": row[5],
                "telefonoUsuario": row[6],
                "codigoPostalUsuario": row[7],
                "fechaNacimientoUsuario": row[8],
            }
            
            listaUsuarios.append(jsonDevuelto)
        conexion.commit()
        
        return listaUsuarios
        
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al obtener los usuarios, error: ",error)
    

def crearUsuario(dniUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,direccionUsuario,contrasenaUsuario,telefonoUsuario,codigoPostalUsuario,conexion):
    try:
        insert = f"INSERT INTO autonomos.Usuarios (dniUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,direccionUsuario,contrasenaUsuario,telefonoUsuario,codigoPostalUsuario) VALUES ('{dniUsuario}','{nombreUsuario}','{apellidosUsuario}','{fechaNacimientoUsuario}','{direccionUsuario}','{contrasenaUsuario}','{telefonoUsuario}','{codigoPostalUsuario}')"
        curr = conexion.cursor()
        curr.execute(insert)
        conexion.commit()
        
        return("Usuario creado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al crear el usuario, error: ",error)
    

def eliminarUsuario(dniUsuario,conexion):
    try:
        delete = f"DELETE FROM autonomos.Usuarios WHERE dniUsuario = '{dniUsuario}'"
        curr = conexion.cursor()
        curr.execute(delete)
        conexion.commit()
        
        return("Usuario eliminado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al eliminar el usuario, error: ",error)
    

def modificarUsuario(idUsuario,dniUsuario,nombreUsuario,apellidosUsuario,fechaNacimientoUsuario,direccionUsuario,contrasenaUsuario,telefonoUsuario,codigoPostalUsuario,conexion):
    try:
        update = f"UPDATE autonomos.Usuarios SET dniUsuario = '{dniUsuario}', nombreUsuario = '{nombreUsuario}', apellidosUsuario = '{apellidosUsuario}', fechaNacimientoUsuario = '{fechaNacimientoUsuario}', direccionUsuario = '{direccionUsuario}', contrasenaUsuario = '{contrasenaUsuario}', telefonoUsuario = '{telefonoUsuario}', codigoPostalUsuario = '{codigoPostalUsuario}' WHERE idUsuario = '{idUsuario}'"
        curr = conexion.cursor()
        curr.execute(update)
        conexion.commit()
        
        return("Usuario modificado correctamente")
    
    except pymysql.Error as error:
        
        conexion.commit()
        
        return("Error al modificar el usuario, error: ",error)


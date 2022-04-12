from multiprocessing import connection
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


    
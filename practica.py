from __future__ import print_function
from cgi import print_arguments

#Para comentar el código en Python se necesita el Slash "#"

                                          #Definir variables de String
ejercicio = "Hora de hacer ejercicio"
favorite_game = "Fortnite"

                                          #Tipos de datos
edad = 21            #Int
estatura = 1.74      #Float
eres_feo = False     #Boolean

print(ejercicio)
print(f"Cual es tu videojuego favorito? {favorite_game}")
print(f"Que edad tienes? {edad} anos")                              #Imprimimos las variables
print(f"Cuanto mides? = {estatura} cms")
print(f"Eres feo?, {eres_feo}")

                                     #Funciones en Python
#En python definimos una funcion con un "def(...):" 
#Despues se imprime el argumento de la funcion "print(...)"
#Finalmente se manda a llamar a la funcion por el nombre que se le asignó "....(...)"

def informacion():                        #La funcion se llama informacion
    print("Mi nombre es Alexis")
informacion() 

                                          #Funcion con argumentos

def informacion(nombre, puesto = "Desconocido"):
    print(f"Soy {nombre} y soy {puesto}" )        # {} sirven para poner el parametro que establecimos en la funcion
informacion("Alexis", "un bueno para nada")       # Aquí tenemos que darle un valor a los parametros que establecimos

                                          #Usamos funciones con variables

def informacion(nombre):             #Definimos la funcuion y le pasamos un parametro a la funcion, en este caso "nombre"
  return nombre                      #Devolvemos un "nombre"

empleado = informacion("Keps")       #Creamos una variable "empleado" y le pasamos la funcion "informacion" con un valor
print(empleado)                      #La variable "empleado tendrá el valor de "informacion" y se imprime


                                          #Funcion que imprima mi nombre 

nombre = "Alexis"   

def mostrar_nombre(nombre):                #Definimos una funcion que muestre un "nombre" y la imprimimos
    print(f"Hola, mi nombre es {nombre}")   

mostrar_nombre = nombre                    #Llamamos a la funcion 

print(nombre.upper())                 # .upper es un metodo que devuelve todo en mayusculas
print(nombre.lower())                 # .lower .  .    .     .    .       .    . minusculas









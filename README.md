# TestDjango

Vamos a tener en cuenta los comandos que usaremos en el Windows Shell para abrir el entorno virtual:

1º Nos vamos a la carpeta del proyecto django
2º py -m venv venv (esto es para crear el entorno virtual, (SOLAMENTE UNA VEZ))
3º .\venv\Scripts\activate (y esto para activarlo) 

Para trabajar con el servidor:

1º Nos vamos a la carpeta del proyecto desde el entorno virtual
2º py .\manage.py runserver
3º py .\manage.py makemigrations (hacer las migraciones de lo que hemos tocado en los modelos)
4º py .\manage.py migrate (para actualizar la base de datos)

Crear un super usuario: py .\manage.py createsuperuser (usando uvus y numérica usual)


Errores comunes en el proyecto DJANGO:

- BACKEND:

* Cuando estamos en la parte de administración de la base de datos del proyecto (admin.py) tenemos que llamar a los atributos
de la tabla literalmente como los llamamos en el modelo (model.py)
* Dará error en cualquier parte de la base de datos si hemos creado una tabla, intentamos acceder a ella pero no hemos hecho la migración
usando py .\manage.py makemigrations
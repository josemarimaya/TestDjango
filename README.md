# TestDjango

Vamos a tener en cuenta los comandos que usaremos en el Windows Shell para abrir el entorno virtual:

1º Nos vamos a la carpeta del proyecto django
2º py -m venv venv
3º .\venv\Scripts\activate

Para trabajar con el servidor:

1º Nos vamos a la carpeta del proyecto desde el entorno virtual
2º py .\manage.py runserver
3º py .\manage,py makemigrations (hacer las migraciones de lo que hemos tocado en los modelos)
4º py .\manage,py migrate (para actualizar la base de datos)

Crear un super usuario: py .\manage.py createsuperuser (usando uvus y numérica usual)
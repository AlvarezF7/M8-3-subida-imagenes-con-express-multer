## M8-3-Subida de imagenes con Express + Multer

## Descripción
Proyecto práctico para subir imágenes al servidor usando Node.js, Express y Multer. Permite validar tipo de archivo y tamaño, mostrar mensajes de éxito o error, y ver la imagen subida en un modal. Ideal para aprender la gestión de archivos en el backend y la interacción con el frontend.


## Tecnologías utilizadas
- Node.js.  
- Express.   
- HTML / CSS / JavaScript.  
- Boostrap 5.

## Estructura Proyecto
![imagen-estructura-proyecto](https://github.com/AlvarezF7/M8-3-subida-imagenes-con-express-multer/blob/main/public/img/estructura-proyecto.png)


## Funcionalidades
- Subida de imágenes (jpg, jpeg, png, gif) con límite de 5 MB.
- Mensajes de feedback en la interfaz (éxito o error).
- Modal para mostrar la imagen subida.
- Validación en backend para tipo de archivo y tamaño.
- Limpieza automática del input después de subir o error.
- Responsive para móviles y tablets.

## Endpoints

| Método | Ruta    | Descripción                     | Código HTTP     |
| ------ | ------- | ------------------------------- | --------------- |
| POST   | /upload | Subir una imagen (campo `foto`) | 201 / 400 / 415 |


## Vista de la Aplicación para celular y Ipad

![vista -celular](https://github.com/AlvarezF7/M8-3-subida-imagenes-con-express-multer/blob/main/public/img/vista-celular.png)

![vista-ipad](https://github.com/AlvarezF7/M8-3-subida-imagenes-con-express-multer/blob/main/public/img/vista-ipad.png)


### Pruebas de Validación
Intento subir archivo `.txt` (rechazado):

![txt-error](https://github.com/AlvarezF7/M8-3-subida-imagenes-con-express-multer/blob/main/public/img/error-txt.png)

Intento subir archivo `.pdf` (rechazado):

![pdf-error](https://github.com/AlvarezF7/M8-3-subida-imagenes-con-express-multer/blob/main/public/img/error-pdf.png)




## Instrucciones de ejecución

1. Instalar dependencias: **npm install**
2. Ejecutar servidor:**npm start**
3. Abrir en el navegador: http://localhost:3000


## Notas
- Las imágenes se guardan en la carpeta uploads/ con nombre único (Date.now() + extensión).



## Autor
Fernanda Álvarez para curso Fullstack Javascript Sence.

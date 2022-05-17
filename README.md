# Master Oficial en Desarrollo y Operaciones

## Contenedores

### Actividad-2: Construcción de imágenes Docker y despliegue con Docker Compose

Se realizará un proyecto con Docker Compose para llevar a cabo lo solicitado.

El fichero _docker-compose.yml_ tendrá dos servicios:

- El servicio de la aplicación _Node.js_
- Y el servicio de la base de datos _MongoDB_

En la sección _db_ del fichero _docker-compose.yml_ le especificamos que use la imagen para la base de datos. 

En este caso estamos usando la imagen oficial de **mongo**.

Para construir el fichero _Dockerfile_ necesario para _Node.js_, hemos instalado los paquetes necesarios 
siguiendo [esta página web](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/).

Por lo demás, se ha usado una imagen oficial de ubuntu con tag de la versión 22.04.

Se considera importante mencionar que se han usado imágenes oficiales. Esto es así porque es una buena práctica y además
porque estas imágenes son las más usadas y probadas y así tendremos menos puntos de fallo en caso
de un bug en nuestro proyecto.


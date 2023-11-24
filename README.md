#  Solana - Autenticación de Tickets de NFT y Gestión de Eventos

Este proyecto permite a los usuarios crear tickets NFT para sus eventos, listar los tickets que ha creado, todos los tickets NFT que tiene en venta en el marketplace, transferir los tickets NFT a otros usuarios, ver el historial de todas las transacciones que ha hecho en el marketplace, ver las estaditicas de todo el marketplace, compartir sus eventos en redes sociales, entrar al evento por medio de un codigo QR. Todas estas operaciones dentro de la plataforma se hacen con las apies de SHYFT.

## Cómo configurar y correr el proyecto.
Clonar el repositorio y entrar al directorio del proyecto, es importante instalar todas las dependencias necesarias por lo que hay que correr el siguiente comando:

```bash
npm ci
```
Después de terminar de instalar las dependencias, hay que crear una cuenta en [SHYFT Website](https://shyft.to/get-api-key) para obtener su propia REACT_APP_API_KEY y REACT_APP_URL_EP. Crear un archivo .env dentro del directorio (O renombrar el archivo  `dev.env` como  `.env`) y agregar las siguientes variables:

```bash
REACT_APP_API_KEY=YOUR-API-KEY
REACT_APP_URL_EP=https://api.shyft.to/sol/v1/
```
Después de ingresar su propia API key en REACT_APP_API_KEY y su propia RPC URL en REACT_APP_URL_EP, ya esta listo para correr el comando: 

```bash
npm run start
```
De esta forma va a estar corriendo la aplicación en modo desarrollador y puede ver la pagina en [http://localhost:3000](http://localhost:3000).





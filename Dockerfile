# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que corre tu aplicación
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "start"]

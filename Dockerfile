# Usar la imagen oficial de Deno
FROM denoland/deno:latest

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 8000

# Comando para ejecutar el servidor
CMD ["run", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "src/server.ts"]

# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor estático con Nginx
FROM nginx:alpine

# Copiamos archivos construidos a la carpeta que Nginx servirá

# Eliminamos la configuración por defecto y copiamos la nuestra
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

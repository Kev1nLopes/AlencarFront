# Stage 1: Build Angular App
FROM node:latest as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve Angular App using Nginx
FROM nginx:alpine
COPY --from=node /app/dist/FrontWebApi /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

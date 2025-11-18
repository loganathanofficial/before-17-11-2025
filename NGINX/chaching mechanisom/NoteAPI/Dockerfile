# Dockerfile (Correction: EXPOSE 8080 to match Nginx config)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080  
CMD [ "node", "server.js" ]
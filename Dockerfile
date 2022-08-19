FROM node:14-slim

WORKDIR /usr/src/app
RUN npm install 
COPY . .
COPY .env.server .env
EXPOSE 3000
CMD [ "node", "index.js" ]
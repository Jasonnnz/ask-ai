FROM node:18.11
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node", "server.js" ]
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy app files from the src
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]

FROM node:16.9.1-slim

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

# ENTRYPOINT ["sh", "-c", "npm install && tail -f /dev/null"]

CMD [ "npm", "run", "start" ]

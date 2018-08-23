FROM node:8

WORKDIR /usr/src/momentumm

COPY package*.json ./

RUN yarn install
COPY . .
RUN yarn run build

EXPOSE 3000

CMD [ "npm", "start" ]

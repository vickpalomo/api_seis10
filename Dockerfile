FROM node:12.18.2-alpine3.12

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run apidoc

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
FROM node:12.18.4-alpine
ENV APP_DIR grow-challenge
WORKDIR /usr/app/${APP_DIR}
COPY package*.json ./
COPY .nvmrc .
RUN npm install
COPY . .
RUN npm run test
RUN npm run lint-fix
RUN npm run lint
EXPOSE 3000
CMD [ "npm" , "start" ]
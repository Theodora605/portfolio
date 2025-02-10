FROM node:22-alpine

EXPOSE 3000

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

CMD [ "serve", "-s", "dist", "-p", "3000" ]
FROM node:lts-alpine

RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

CMD npm run dev
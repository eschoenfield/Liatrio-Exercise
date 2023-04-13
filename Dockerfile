FROM node:alpine

WORKDIR /app

EXPOSE 80

COPY node/package.json node/package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]

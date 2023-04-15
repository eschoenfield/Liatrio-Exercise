FROM node:18.15.0

WORKDIR /app

EXPOSE 80

COPY node/package.json node/package-lock.json ./

RUN npm install

COPY . ./

CMD ["node", "node/index.js"]

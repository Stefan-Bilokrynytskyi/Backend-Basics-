FROM node

WORKDIR /app

COPY ./src .
COPY package.json .
COPY package-lock.json .

RUN npm install


CMD ["npm", "run", "start"]

FROM node


WORKDIR /app


COPY ./src ./src
COPY package.json .
COPY package-lock.json .
COPY .env .


RUN npm install


CMD ["npm", "run", "start"]
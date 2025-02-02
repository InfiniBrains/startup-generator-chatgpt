FROM node:lts AS dist
COPY package.json yarn.lock ./

RUN npm install

COPY . ./

RUN npm run build:prod

FROM node:lts AS node_modules
COPY package.json ./

RUN npm install

FROM node:lts

ARG PORT=8080

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY --from=dist dist /usr/src/app/dist
COPY --from=node_modules node_modules /usr/src/app/node_modules

COPY . /usr/src/app

EXPOSE $PORT

CMD [ "npm", "run", "start:prod" ]

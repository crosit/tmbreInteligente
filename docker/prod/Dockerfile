# STAGE 1
FROM node:16.13.1-alpine3.15 as builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm config set unsafe-perm true

RUN npm install -g typescript

RUN npm install -g ts-node

USER node

RUN npm install

COPY --chown=node:node . .

RUN npm run clean

# STAGE 2
FROM node:16.13.1-alpine3.15

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node
# RUN npm install --save-dev sequelize-cli
RUN npm install --production

COPY --from=builder /home/node/app/dist ./dist

EXPOSE 3000
CMD [ "node", "dist/index.js" ]
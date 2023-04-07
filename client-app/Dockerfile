FROM node:18.14.0-alpine3.17 as build

WORKDIR /app

COPY ./ ./

RUN yarn 

CMD ["yarn", "serve"]

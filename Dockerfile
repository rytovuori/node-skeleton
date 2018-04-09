FROM node:alpine

RUN mkdir dist

ADD src /dist/src
COPY package.json /dist

WORKDIR dist

RUN npm install

CMD ["npm", "start"]

EXPOSE 80
FROM node:9.6.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
EXPOSE 3000

RUN npm install
RUN npm rebuild node-sass

CMD [ "npm", "start" ]

FROM node:19.4 as buidler

COPY ./package.json ./package.json
RUN npm install

COPY ./server.js ./server.js

EXPOSE 8000
CMD ["npm", "run", "start"]
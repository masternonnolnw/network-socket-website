FROM node:19.4 as buidler

COPY ./package.json ./package.json
RUN npm install

COPY ./ ./

EXPOSE 9000
CMD ["npm", "run", "start"]
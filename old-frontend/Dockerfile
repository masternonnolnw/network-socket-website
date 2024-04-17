FROM node:19.4 as buidler

COPY ./package.json ./package.json
RUN npm install

COPY ./tsconfig.json ./tsconfig.json
COPY ./src/ ./src/
COPY ./public/ ./public/

RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
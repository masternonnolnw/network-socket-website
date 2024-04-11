FROM node:19.4 as buidler

COPY ./package.json ./package.json
RUN npm install --legacy-peer-deps

COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./.env ./.env
COPY ./src/ ./src/
COPY ./prisma/ ./prisma/

ENV DATABASE_URL="postgresql://postgres:banana@host.docker.internal:5432/banana-db?schema=public"
ENV JWT_SECRET='axzcbasfawerzxclvn'
RUN npx prisma migrate dev
RUN npm run build

EXPOSE 5000
CMD npm run start:prod
FROM node:19.4 as buidler

WORKDIR /app

COPY ./ ./

# install pnpm
RUN npm i -g pnpm

# install dependencies
RUN pnpm i

# build the source code

EXPOSE 9000
CMD ["pnpm", "dev"]
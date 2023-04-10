ARG VARIANT=18
FROM mcr.microsoft.com/devcontainers/javascript-node:0-${VARIANT}

WORKDIR /workspace

COPY . .

RUN npm install

RUN npm run prisma-migration

EXPOSE 5000

CMD [ "node", "./dist/index.js" ]
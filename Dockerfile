ARG VARIANT=18
FROM mcr.microsoft.com/devcontainers/javascript-node:0-${VARIANT}

WORKDIR /workspace

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "npm", "run", "prisma-migration" ]

CMD [ "node", "./dist/index.js" ]
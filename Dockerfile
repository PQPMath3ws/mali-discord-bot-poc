ARG VARIANT=18
FROM mcr.microsoft.com/devcontainers/javascript-node:0-${VARIANT}

WORKDIR /workspace

COPY . .

RUN npm install

RUN npx tsc

CMD [ "npm", "run", "prisma-migration" ]

CMD [ "node", "./dist/index.js" ]

EXPOSE 5000
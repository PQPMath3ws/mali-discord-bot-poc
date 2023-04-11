ARG VARIANT=18
FROM mcr.microsoft.com/devcontainers/javascript-node:0-${VARIANT}

WORKDIR /workspace

COPY . .

EXPOSE 80
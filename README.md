# MaLi Discord Bot (PoC)

Aqui jás um projeto **SIMPLES** em estágio **inicial** de um bot para servidores/guildas do **Discord**! - ***EBA!!!***

**Tecnologias/libs usadas:**

- TypeScript
- NodeJS
- Discord.js
- Express
- Prisma
- Ejs
- Cors
- http-status
- winston

Para executar esse projeto em ambiente local, você deve seguir os seguintes passos:

Copie o arquivo ```.env.example``` e renomeie a cópia para ```.env``` e substitua os valores necessários para rodar a aplicação

OU

Crie um arquivo ```.env``` e preencha as variáveis vazias no arquivo:

```
APP_PORT=
DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public
DISCORD_BOT_CLIENT_ID=
DISCORD_BOT_PUBLIC_KEY=
DISCORD_BOT_TOKEN=
POSTGRES_USERNAME=
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_PORT=
POSTGRES_DATABASE=
```

> OBS: É necessário ter uma aplicação e um bot criados no [**painel de developer do discord**](https://discord.com/developers).

**Se estiver usando o VSCode**, peça para reabrir o projeto em um container, que ele realizará todas as etapas necessárias para configurar seu projeto para primeira (e futura(s)) execução(ões).

**Se não estiver usando o VSCode**, abra um terminal, navegue até a pasta do projeto, e execute o seguinte comando:

```
npx @devcontainers/cli up --workspace-folder .
```

**VOALÁ!** - O projeto já está sendo executado na sua máquina!

<hr>

## Comandos do bot:

Abaixo segue uma lista dos comandos disponíveis do bot até o exato momento:

### Diversão

|Comando|Descrição|
|:-------------:|:---------------------------------------:|
| ping | Responde com **pong**! |

### Meta

|Comando|Descrição|
|:-------------:|:---------------------------------------:|
| contaservers | Retorna uma mensagem de quantos servidores o bot está presente (consultando o banco de dados) |
| criador | Informa ao usuário quem é o criador do bot, em questão. |
| minhafoto | Retorna ao usuário a sua foto de perfil do discord para poder baixar-lá futuramente. |

<br>

Existe uma instância desse bot (original) rodando em um servidor dedicado.

Para convidar o bot original, basta clicar no link abaixo:

[**Convidar o bot para o seu servidor**](http://129.148.50.54/)
#!/bin/bash

echo "APP_PORT="$1 > .env
echo "DISCORD_BOT_CLIENT_ID="$2 >> .env
echo "DISCORD_BOT_PUBLIC_KEY="$3 >> .env
echo "DISCORD_BOT_TOKEN="$4 >> .env
echo "POSTGRES_USERNAME="$5 >> .env
echo "POSTGRES_PASSWORD="$6 >> .env
echo "POSTGRES_HOST="$7 >> .env
echo "POSTGRES_PORT="$8 >> .env
echo "POSTGRES_DATABASE="$9 >> .env
echo "DATABASE_URL="$10 >> .env
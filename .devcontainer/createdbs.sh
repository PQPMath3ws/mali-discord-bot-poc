#!/bin/bash

set -e
set -u

if [ -n "$POSTGRES_DATABASES" ]; then
    for dbname in $(echo $POSTGRES_DATABASES | tr ',' ' '); do
        psql -v ON_ERROR_STOP=1 --username malibot --dbname postgres -tc "SELECT 1 FROM pg_database WHERE datname = '$dbname';" | grep -q 1 | psql -v ON_ERROR_STOP=1 --username malibot --dbname postgres -c "CREATE DATABASE $dbname OWNER malibot;"
    done
fi
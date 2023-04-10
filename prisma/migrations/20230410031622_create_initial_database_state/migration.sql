-- CreateTable
CREATE TABLE "joined_servers" (
    "server_id" BIGINT NOT NULL,
    "server_name" VARCHAR(100) NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "owner_id" BIGINT NOT NULL,

    CONSTRAINT "joined_servers_pkey" PRIMARY KEY ("server_id")
);

-- CreateTable
CREATE TABLE "leaved_servers" (
    "server_id" BIGINT NOT NULL,
    "server_name" VARCHAR(100) NOT NULL,
    "leaved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "owner_id" BIGINT NOT NULL,

    CONSTRAINT "leaved_servers_pkey" PRIMARY KEY ("server_id")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "server_id" BIGINT NOT NULL,
    "command_name" VARCHAR(40),
    "activity_description" VARCHAR(255) NOT NULL,
    "server_name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "joined_servers_server_id_key" ON "joined_servers"("server_id");

-- CreateIndex
CREATE UNIQUE INDEX "leaved_servers_server_id_key" ON "leaved_servers"("server_id");

-- CreateIndex
CREATE UNIQUE INDEX "activity_logs_id_key" ON "activity_logs"("id");

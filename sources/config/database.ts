import { PrismaClient } from "@prisma/client";

let prismaClient:PrismaClient;

export function connectDatabase():void {
    prismaClient = new PrismaClient();
}

export async function disconnectDatabase():Promise<void> {
    await prismaClient?.$disconnect();
}

export function getPrismaClient():PrismaClient {
    return prismaClient;
}
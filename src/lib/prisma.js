import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  console.log("Production mode: Creating PrismaClient");
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    console.log("Development mode: Creating global PrismaClient");
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma

// From https://github.com/prisma/prisma/issues/6219#issuecomment-1195295658
import { PrismaClient } from "@prisma/client";
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

console.log(typeof window)
if (typeof window === "undefined") {
  if (process.env.VERCEL_ENV === "development") {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  } else {
    prisma = new PrismaClient();
  }
}
//@ts-ignore
export default prisma;

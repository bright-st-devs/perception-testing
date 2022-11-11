import { Test, TestUser } from "@prisma/client";
import prisma from "./prisma";

export async function createTestUser(
  ip: string,
  useragent: string
): Promise<TestUser | null> {
  var testUser = await prisma.testUser.findFirst({
    where: {
      ip: ip,
      useragent: useragent,
    },
  });

  if (testUser === null) {
    testUser = await prisma.testUser.create({
      data: {
        ip: ip,
        useragent: useragent,
      },
    });
  }
  return testUser;
}

export async function addTest(
  ip: string,
  useragent: string,
  testId: number,
  correct: boolean,
  duration: number
): Promise<Test | null> {
  var testUser = await prisma.testUser.findFirst({
    where: {
      ip: ip,
      useragent: useragent,
    },
    select: {
      id: true,
    }
  });

  return prisma.test.create({
    data: {
      testId: testId,
      correct: correct,
      durationMs: duration,
      testUserId: testUser.id,
    }
  })
}

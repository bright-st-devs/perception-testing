import {
  AgeRange,
  Demographics,
  DrivingTime,
  Gender,
  Test,
  TestUser,
} from "@prisma/client";
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
  duration: number,
  timerDisplayed: boolean
): Promise<Test | null> {
  var testUser = await prisma.testUser.findFirst({
    where: {
      ip: ip,
      useragent: useragent,
    },
    select: {
      id: true,
    },
  });

  return prisma.test.create({
    data: {
      testId: testId,
      correct: correct,
      durationMs: duration,
      timerDisplayed: timerDisplayed,
      testUserId: testUser.id,
    },
  });
}

export async function addDemographics(
  ip: string,
  useragent: string,
  ageRange: AgeRange,
  gender: Gender,
  drivingTime: DrivingTime
): Promise<Demographics | null> {
  var testUser = await prisma.testUser.findFirst({
    where: {
      ip: ip,
      useragent: useragent,
    },
    select: {
      id: true,
    },
  });

  return prisma.demographics.create({
    data: {
      ageRange: ageRange,
      gender: gender,
      drivingTime: drivingTime,
      testUserId: testUser.id,
    },
  });
}

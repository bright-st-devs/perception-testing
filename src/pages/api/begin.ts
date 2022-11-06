import prisma from "../../db/prisma";

export type BeginReqBody = {
  ip: string
  useragent: string
}

export default async function handler(req: any, res: any) {
  try {
    const testResult = await prisma.testResult.create({
      data: req.body,
    });
    res.status(200).json(testResult);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Error occured while adding a TestResult." });
  }
};

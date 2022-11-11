import { createTestUser } from "../../db/queries";

export type BeginReqBody = {
  ip: string;
  useragent: string;
};

export default async function handler(req: any, res: any) {
  try {
    var { ip, useragent } = req.body;
    var testUser = await createTestUser(ip, useragent)
    res.status(200).json(testUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Error occured while adding a TestResult. Please contact support to resolve the issue." });
  }
}

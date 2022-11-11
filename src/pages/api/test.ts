import { addTest } from "../../db/queries";

export type TestReqBody = {
  ip: string;
  useragent: string;
  testId: number;
  correct: boolean;
  duration: number;
};

export default async function handler(req: any, res: any) {
  try {
    var { ip, useragent, testId, correct, duration } = req.body;
    var test = await addTest(ip, useragent, testId, correct, duration);

    res.status(200).json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: "Error occured while adding a TestResult. Please contact support to resolve the issue.",
    });
  }
}

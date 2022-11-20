import { AgeRange, Gender } from "@prisma/client";
import { addDemographics } from "../../db/queries";

export type DemographicsReqBody = {
  ip: string;
  useragent: string;
  ageRange: AgeRange;
  gender: Gender;
};

export default async function handler(req: any, res: any) {
  try {
    var { ip, useragent, ageRange, gender } = req.body;
    var demographics = await addDemographics(ip, useragent, ageRange, gender);

    res.status(200).json(demographics);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: "Error occured while adding a TestResult. Please contact support to resolve the issue.",
    });
  }
}

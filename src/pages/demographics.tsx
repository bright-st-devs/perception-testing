import type { NextPage } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { getIp } from "../@shared/functions/ip";
const DeomgraphicsSurvey = dynamic(
  () => import("../@shared/demographics/DeomgraphicsSurvey"),
  {
    ssr: false,
  }
);

interface Props {
  ip: string;
  useragent: string;
}

export async function getServerSideProps(context: any) {
  const ip = getIp(context.req);
  const useragent = context.req.headers["user-agent"];
  return {
    props: {
      ip,
      useragent,
    },
  };
}

const Demographics: NextPage<Props> = (props) => {
  return (
    <div className="demographics">
      <h1>Demographics</h1>
      <p>
        To help with the analysis of the test results please complete a short
        demographics survey.
        <br />
        All questions are optional and any information you provide will be quite
        helpful.
      </p>
      <DeomgraphicsSurvey ip={props.ip} useragent={props.useragent} />
    </div>
  );
};

export default Demographics;

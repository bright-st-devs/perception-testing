import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import React from "react";
import Table from "../@shared/table/Table";
import { testData, TestDatum } from "../@shared/tests/TestData";
import { getIp } from "../@shared/functions/ip";

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

const TestPage: NextPage<Props> = (props) => {
  const [showTest, setShowTest] = React.useState(false);
  const router = useRouter();
  const testId = Math.max(
    1,
    Math.min(testData.length, Number(router.query.id))
  );

  // TODO: why does this take a while to load? It's null first. Is it something to do with router?
  const testDatum: TestDatum = testData[testId - 1];
  // console.log(testId)
  // console.log(testDatum)

  var instructions = testDatum
    ? "<p>" + testDatum.instructions + "</p>"
    : "<p/>";

  return (
    <div className="main">
      <h1>Test {testId}</h1>
      <div dangerouslySetInnerHTML={{ __html: instructions }} />
      <button className={styles.button} onClick={() => setShowTest(true)}>
        Start Test
      </button>

      {showTest ? (
        <Table
          ip={props.ip}
          useragent={props.useragent}
          testDatum={testDatum}
          testId={testId}
        />
      ) : null}
    </div>
  );
};

export default TestPage;

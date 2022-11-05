import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import React from "react";
import Table from "../@shared/table/Table";
import { testData, TestDatum } from "../@shared/tests/TestData";

const TestPage: NextPage = () => {
  const [showTest, setShowTest] = React.useState(false);
  const router = useRouter();
  const testId = Number(router.query.id);

  // TODO: handle when testId is less than 1 or bigger than length
  const testDatum: TestDatum = testData[testId - 1];
  // console.log(testId)
  // console.log(testDatum)

  return (
    <div className="instructions">
      <h1>Test {testId}</h1>
      <p>{testDatum ? testDatum.instructions : null}</p>
      <button onClick={() => setShowTest(true)} className="button">
        Start Test
      </button>

      {showTest ? <Table testDatum={testDatum} testId={testId} /> : null}
    </div>
  );
};

export default TestPage;

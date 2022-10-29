import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";
import Table from "../@shared/table/Table";
import type { Row } from "../@shared/table/Table";

const testId: number = 2
const nextPage: string = "test3"
const tableData: Row[] = [
  {
    button: "",
    colours: ["black","black","black","black","black","black","black","black","black",],
  },
  {
    button: "",
    colours: ["black","black","black","black","black","black","red","black","black",],
  },
  {
    button: "",
    colours: ["black","black","black","black","black","black","black","black","black",],
  },
];

const Instructions: NextPage = () => {
  const [showTest, setShowTest] = React.useState(false);

  return (
    <div className="instructions">
      <h1>Test {testId}</h1>
      <p>These are where the instructions will go</p>
      <button onClick={() => setShowTest(true)} className="button">
        Start Test
      </button>

      {showTest ? <Table 
        tableData={tableData}
        testId={testId}
        nextPage={nextPage}
        /> : null}
    </div>
  );
};

export default Instructions;

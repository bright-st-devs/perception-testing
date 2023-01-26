import React from "react";
import { msToTime } from "../functions/time";
import { testData } from "../tests/TestData";
import styles from "../../styles/Home.module.css";

function Results(props: {
  startTime: number;
  endTime: number;
  rowSelected: number;
  correctRow: number;
  testId: number;
}) {
  const duration = props.endTime - props.startTime;
  const displayTimer = Boolean(process.env.displayTimer);
  const rowString =
    props.rowSelected < 1 ? "'None'" : "row " + props.rowSelected + "";

  async function nextTest() {
    // testId is 1-bases so this is right
    if (props.testId < testData.length) {
      window.location.href = "test?id=" + String(props.testId + 1);
    } else {
      window.location.href = "demographics";
    }
  }

  return (
    <div className={styles.results}>
      {props.rowSelected === props.correctRow ? (
        <p>
          Congratulations! You correctly selected {rowString}.
          {displayTimer ? " It took you "+msToTime(duration)+"." : ""}
        </p>
      ) : (
        <p>
          Unfortunately, you incorrectly selected {rowString}.
          {displayTimer ? " It took you "+msToTime(duration)+"." : ""}
        </p>
      )}
      <button className={styles.button} onClick={() => nextTest()}>
        Next Test
      </button>
    </div>
  );
}

export default Results;

import React from "react";
import { msToTime } from "../functions/time";
import { testData } from "../tests/TestData";

function Results(props: {
  startTime: number;
  endTime: number;
  rowSelected: number;
  correctRow: number;
  testId: number;
}) {
  const duration = props.endTime - props.startTime;
  const rowString =
    props.rowSelected < 1
      ? "'None of the above'"
      : "row " + props.rowSelected + "";

  function nextTest() {
    if (props.testId < testData.length) { // testId is 1-bases so this is right
      window.location.href = "test?id=" + props.testId + 1;
    }
    else {
      window.location.href = "demographics";
    }
  }

  return (
    <div className="results">
      {props.rowSelected === props.correctRow ? (
        <p>
          Congratulations! It took you {msToTime(duration)} to correctly select{" "}
          {rowString}.
        </p>
      ) : (
        <p>
          Unfortunately, it took you {msToTime(duration)} to incorrectly select{" "}
          {rowString}.
        </p>
      )}
      <button onClick={() => nextTest()} className="button">
        Next Test
      </button>
    </div>
  );
}

export default Results;

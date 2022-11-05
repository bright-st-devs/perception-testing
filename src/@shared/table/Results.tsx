import React from "react";
import { msToTime } from "../functions/time";

export type Row = {
  button: string;
  colours: string[];
};

function Results(props: any) {
  const duration = props.endTime - props.startTime;
  const rowString =
    props.rowSelected < 1
      ? "'None of the above'"
      : "row " + props.rowSelected + "";

  function nextTest() {
    window.location.href = props.nextPage;
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

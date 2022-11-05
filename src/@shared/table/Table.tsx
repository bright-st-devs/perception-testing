import React from "react";
import { useStopwatch } from "react-timer-hook";
import { pad } from "../functions/time";
import { TestDatum } from "../tests/TestData";
import Results from "./Results";

interface TableProps {
  testDatum: TestDatum;
  testId: number;
}

function Table(props: TableProps) {
  const [rowSelected, setRowSelected] = React.useState(-1);
  const [startTime, setStartTime] = React.useState(Date.now());
  const [endTime, setEndTime] = React.useState(0);
  const [testComplete, setTestComplete] = React.useState(false);
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  function endTest(row: number) {
    if (!testComplete) {
      setRowSelected(row);
      pause();
      setEndTime(Date.now());
      setTestComplete(true);
      // TODO: save time to database
    }
  }

  return (
    // <div className={styles.container}>
    <div className="test">
      <p>
        {pad(minutes)}:{pad(seconds)}
      </p>
      <table>
        <tbody>
          {props.testDatum.colours.map((row: string[], i: number) => (
            <tr key={i}>
              <td>
                {/* We want to use 1-based rows for the users so we use i+1 */}
                <button onClick={() => endTest(i + 1)}>Select row {i+1}</button>
              </td>
              {row.map((colour: string, j: number) => (
                <td key={j}>
                  <span style={{ color: colour }}>x </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => endTest(0)} className="button">
        None of the above
      </button>

      {testComplete ? (
        <Results
          startTime={startTime}
          endTime={endTime}
          rowSelected={rowSelected}
          correctRow={props.testDatum.correctRow}
          nextTestId={props.testId + 1}
        />
      ) : null}
    </div>
  );
}

export default Table;

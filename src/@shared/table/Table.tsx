import React from "react";
import { useStopwatch } from "react-timer-hook";
import { pad } from "../functions/time";
import { TestDatum } from "../tests/TestData";
import Results from "./Results";
import { TestReqBody } from "../../pages/api/test";
import axios from "axios";
import styles from "../../styles/Home.module.css";

function Table(props: {
  ip: string;
  useragent: string;
  testDatum: TestDatum;
  testId: number;
}) {
  const [rowSelected, setRowSelected] = React.useState(-1);
  const [startTime, setStartTime] = React.useState(Date.now());
  const [endTime, setEndTime] = React.useState(0);
  const [testComplete, setTestComplete] = React.useState(false);
  const displayTimer = Boolean(process.env.displayTimer);
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  async function endTest(row: number) {
    if (!testComplete) {
      var localEndTime = Date.now();
      setRowSelected(row);
      pause();
      setEndTime(localEndTime);

      const req: TestReqBody = {
        ip: props.ip,
        useragent: props.useragent,
        testId: props.testId,
        correct: row === props.testDatum.correctRow,
        duration: localEndTime - startTime,
        timerDisplayed: displayTimer,
      };
      await axios.post("/api/test", req);

      setTestComplete(true);
    }
  }

  return (
    <div className={styles.test}>
      <p>{displayTimer ? pad(minutes) + ":" + pad(seconds) + " " : null}</p>
      <table className={styles.table}>
        <tbody>
          {props.testDatum.colours.map((row: string[], i: number) => (
            <tr key={i}>
              <td>
                {/* We want to use 1-based rows for the users so we use i+1 */}
                <button
                  className={styles.tbutton}
                  onClick={() => endTest(i + 1)}
                >
                  Select row {i + 1}
                </button>
              </td>
              {row.map((colour: string, j: number) => (
                <td key={j}>
                  <span style={{ color: colour }}>x </span>
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td>
              <button className={styles.tbutton} onClick={() => endTest(0)}>
                Select None
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {testComplete ? (
        <Results
          startTime={startTime}
          endTime={endTime}
          rowSelected={rowSelected}
          correctRow={props.testDatum.correctRow}
          testId={props.testId}
        />
      ) : null}
    </div>
  );
}

export default Table;

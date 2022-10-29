import type { NextPage } from "next";
import React from "react";
import { useStopwatch } from 'react-timer-hook';

export type Row = {
  button: string;
  colours: string[];
};

function Table(props: any) {
  const [rowSelected, setRow] = React.useState(-2);
  // const [startTime, setStartTime] = React.useState(time);
  const [endTime, setEndTime] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  function endTest(row: number) {
    console.log("test ended");
    setRow(row);
    setEndTime(0); // TODO: how do I get the current time
    pause();
    // TODO: save time to database
    // TOOD: if row === props.correctRow
    // window.location.href=props.nextPage;
  }

  return (
    // <div className={styles.container}>
    <div className="test">
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <table>
        <tbody>
          {props.tableData.map((row: Row, i: number) => (
            <tr key={i}>
              <td><button onClick={() => endTest(i)}>Select</button></td>
              {row.colours.map((colour: string, j: number) => (
                <td key={j}><span style={{color: colour}}>x </span></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => endTest(-1)} className="button">
        Row Clicked: {rowSelected}
      </button>
    </div>
  );
}

export default Table;

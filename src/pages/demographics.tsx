import type { NextPage } from "next";
import React from "react";

const Demographics: NextPage = () => {
  function completeTest() {
    // TODO: add entry in database
    window.location.href='thanks';
  }

  return (
    <div className="demographics">
      <h1>Demographics</h1>
      <p>TODO: Add demographics survey.</p>
      <input type="button" onClick={completeTest} value="Complete Test" />
    </div>
  );
};

export default Demographics;

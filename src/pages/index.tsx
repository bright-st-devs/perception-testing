import type { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  function begin() {
    // TODO: add entry in database
    window.location.href='test?id=1';
  }

  return (
    <div className="index">
      <h1>Allie&apos;s Science Fair</h1>
      <p>Welcome to my science fair. TODO: add details</p>
      <input type="button" onClick={begin} value="Begin" />
    </div>
  );
};

export default Index;

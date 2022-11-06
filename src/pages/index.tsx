import type { NextPage } from "next";
import React from "react";
import axios from "axios";
import { BeginReqBody } from "./api/begin";

const Index: NextPage = (props) => {
  async function begin() {
    console.log(props);
    const req: BeginReqBody = {
      ip: "0.0.0.0",
      useragent: "TODO",
    };
    await axios.post("/api/begin", req);
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

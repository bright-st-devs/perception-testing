import axios from "axios";
import React from "react";
import * as Survey from "survey-react";
// Modern theme
import "survey-react/modern.min.css";
import { DemographicsReqBody } from "../../pages/api/demographics";
import { DemographicsQuestions } from "./DemographicsQuestions";
import styles from "../../styles/Home.module.css";

function DeomgraphicsSurvey(props: { ip: string; useragent: string }) {
  async function completeSurvey(survey: any, options: any) {
    console.log(survey.data);
    const req: DemographicsReqBody = {
      ip: props.ip,
      useragent: props.useragent,
      ageRange: survey.data.ageRange,
      gender: survey.data.gender,
      drivingTime: survey.data.drivingTime,
    };
    console.log(req);
    await axios.post("/api/demographics", req);
    window.location.href = "thanks";
  }

  Survey.StylesManager.applyTheme("modern");
  const survey = new Survey.Model(DemographicsQuestions);
  survey.onComplete.add(completeSurvey);

  return (
    <table className={styles.table}>
      <tr>
        <td className={styles.survey_td}>
          <div className={styles.survey}>
            <Survey.Survey model={survey} />
          </div>
        </td>
      </tr>
    </table>
  );
}

export default DeomgraphicsSurvey;

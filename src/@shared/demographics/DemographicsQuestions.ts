import { AgeRange, Gender } from "@prisma/client"

export const DemographicsQuestions = {
  "pages": [
   {
    "elements": [
     {
      "hideNumber": true,
      "type": "dropdown",
      "name": "ageRange",
      "title": "Age Range",
      "choices": [
       {
        "value": AgeRange.UNDER_10,
        "text": "Under 10 years old"
       },
       {
        "value": AgeRange.FROM_10_TO_15,
        "text": "10-15 years old",
       },
       {
        "value": AgeRange.FROM_16_TO_24,
        "text": "16-24 years old",
       },
       {
        "value": AgeRange.FROM_25_TO_34,
        "text": "25-34 years old",
       },
       {
        "value": AgeRange.FROM_35_TO_44,
        "text": "35-44 years old",
       },
       {
        "value": AgeRange.FROM_45_TO_54,
        "text": "45-54 years old",
       },
       {
        "value": AgeRange.FROM_55_TO_64,
        "text": "55-64 years old",
       },
       {
        "value": AgeRange.FROM_65_TO_74,
        "text": "65-74 years old",
       },
       {
        "value": AgeRange.OVER_74,
        "text": "75 years or older",
       },
      ]
     },
     {
      "hideNumber": true,
      "type": "dropdown",
      "name": "gender",
      "title": "Gender",
      "choices": [
       {
        "value": Gender.FEMALE,
        "text": "Female",
       },
       {
        "value": Gender.MALE,
        "text": "Male",
       },
       {
        "value": Gender.OTHER,
        "text": "Other",
       },
      ]
     }
    ]
   }
  ],
  "showCompletedPage": false,
  "completeText": "Complete",
 }

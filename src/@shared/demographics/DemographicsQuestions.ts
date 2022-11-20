import { AgeRange, DrivingTime, Gender } from "@prisma/client"

export const DemographicsQuestions = {
  "pages": [
   {
    "elements": [
     {
      "hideNumber": true,
      "type": "dropdown",
      "name": "ageRange",
      "title": "What is your age range?",
      "choices": [
       {
        "value": AgeRange.UNDER_10,
        "text": "Under 10 years old",
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
      "title": "What is your gender",
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
     },
     {
      "hideNumber": true,
      "type": "dropdown",
      "name": "drivingTime",
      "title": "How often do you drive?",
      "choices": [
       {
        "value": DrivingTime.EVERY_DAY,
        "text": "Every Day",
       },
       {
        "value": DrivingTime.FROM_3_TO_6_DAYS_A_WEEK,
        "text": "3-6 days per week",
       },
       {
        "value": DrivingTime.FROM_1_TO_2_DAYS_A_WEEK,
        "text": "1-2 days per week",
       },
       {
        "value": DrivingTime.OCCASIONALLY,
        "text": "Occasionally",
       },
       {
        "value": DrivingTime.NEVER,
        "text": "Never",
       },
      ]
     },
    ]
   }
  ],
  "showCompletedPage": false,
  "completeText": "Complete",
 }

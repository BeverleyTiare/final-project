
//Callback function: passed to another function as a parameter and is executed after some event has occured
import React, { useCallback, useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Survey, Model } from 'survey-react-ui';
import { useMutation } from '@apollo/client';
import { ADD_SLEEP } from '../utils/mutations';
import Auth from '../utils/auth';

 //import 'survey-core/modern.min.css'; modern theme
 //survey questions
const surveyJson = {
  elements: [
    {
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }, {
    name: "MedicalHistory",
    title: 'What medical condtions may affect your sleep?',
    type: "checkbox",
    choices: [
      { value :1, text: '1 - Family history of sleep disorders'},
      { value :2, text: '2 - History of cardiac and/or respiratory problems'},
      { value :3, text: '3 - Medical conditions that affect sleep'},
      { value :4, text: '4 - Medications that affect sleep'},
      { value :5, text: '5 - Weight change in the past year'},
      { value :6, text: '6 - Joint pain and/or arthritis'},
      { value :7, text: '7 - Seizures and/or epilepsy'},
      { value :8, text: '8 - History of sleep walking, sleep talking, and /or frequent nightmares'},
      { value :9, text: '9 - Dreamlike images on waking and/or falling asleep'},
    ]
  }, 
  {
    name: 'SleepQuality',
    title: 'How would you rate the quality of your sleep?',
    type: "radiogroup",
    choices: [
      { value: 1, text: '1 - Very Poor' },
      { value: 2, text: '2 - Poor' },
      { value: 3, text: '3 - Fair' },
      { value: 4, text: '4 - Good' },
      { value: 5, text: '5 - Very Good' },
      { value: 6, text: '6 - Excellent' },
    ],
  },
  {
    name: 'SleepOnset',
    title: 'How long does it take you to fall asleep?',
    type: "radiogroup",
    choices: [
      { value: 1, text: '1 - I have trouble falling asleep' },
      { value: 2, text: '2 - More than 60 minutes' },
      { value: 3, text: '3 - 45-60 minutes' },
      { value: 4, text: '4 - 30-45 minutes' },
      { value: 5, text: '5 - 15-30 minutes' },
      { value: 6, text: '6 - Less than 15 minutes' },
    ],
  },
  {
    name: 'AlertnessLevel',
    title: 'How alert do you feel right now?',
    type: "radiogroup",
    choices: [
      { value: 1, text: '1 - Very sleepy and fighting sleep' },
      { value: 2, text: '2 - Fogginess and slowing down' },
      { value: 3, text: '3 - Fatigued but not at peak'},
      { value: 4, text: '4 - Relaxed but not full alert' },
      { value: 5, text: '5 - Functioning at high level' },
      { value: 6, text: '6 - Wide awake and at your peak' },
    ],
  },
  {
    name: 'InsomniaSigns',
    title: 'Do you experience any of the following ?',
    type: "checkbox",
    choices: [
      { value: 1, text: '1 - Are you unable to fall asleep in 15 minutes or less?' },
      { value: 2, text: '2 - Do you wake up several times during the night and cannot get back to sleep?' },
      { value: 3, text: '3 - Do you wake up too early in the morning?'},
      { value: 4, text: '4 - Do you feel unrefreshed when you wake up?' },
      { value: 5, text: '5 - Do you feel tired or sleepy during the day, even if you have had enough sleep?' },
      { value: 6, text: '6 - Do you have trouble concentrating during the day because you are sleepy?' },
    ],
  },
  {
    name: 'SleepQuantity',
    title: 'How many hours of sleep do you get on average?',
    type: "radiogroup",
    choices: [
      { value: 1, text: '1 - Between 1-4 hours' },
      { value: 2, text: '2 - Between 2-5 hours' },
      { value: 3, text: '3 - Between 3-6 hours' },
      { value: 4, text: '4 - Between 4-7 hours' },
      { value: 5, text: '5 - Between 5-8 hours' },
      { value: 6, text: '6 - Between 6-9 hours' },
    ],
  },
  {
    name: 'NocturnalAwakenings',
    title: 'How many times do you wake up during the night?',
    type: "radiogroup",
    choices: [
      { value: 1, text: '1 - 5+ times' },
      { value: 2, text: '2 - 4 times' },
      { value: 3, text: '3 - 3 times' },
      { value: 4, text: '4 - 2 times' },
      { value: 5, text: '5 - 1 time only' },
      { value: 6, text: '6 - I do not wake up during the night' },
    ],
  },
  {
    name: 'SleepEnvrionmentHabits',
    title: 'What habits may affect your sleep?',
    type: "checkbox",
    choices: [
      { value: 1, text: '1 -  I drink coffee or tea' },
      { value: 2, text: '2 -  I drink alcohol in the evening' },
      { value: 3, text: '3 -  I smoke regularly' },
      { value: 4, text: '4 -  I eat late' },
      { value: 5, text: '5 -  I exercise late' },
      { value: 6, text: '6 -  I use my phone or computer before bed'},
      { value: 7, text: '7 -  I watch TV in bed' },
      { value: 8, text: '8 -  I have pets in my bedroom' },
      { value: 9, text: '9 -  I have a regular pattern of awakening and bedtime' },
    ],
  },
  {
    name: 'SocialHistory',
    title: 'What social factors may affect your sleep?',
    type: "checkbox",
    choices: [
      { value: 1, text: '1 -  I have a stressful job' },
      { value: 2, text: '2 -  I have a stressful home life' },
      { value: 3, text: '3 -  I have a stressful social life' },
      { value: 4, text: '4 -  I have a stressful financial situation' },
      { value: 5, text: '5 -  I have a stressful health situation' },
      { value: 6, text: '6 -  I work night shifts or rotating shifts,including nights' },

    ],
  },
],
};

//sleep survey calculations
const survey = new Model(surveyJson);

const SleepQuestionnaire = () => {
  const [addSleep, { error, data }] = useMutation(ADD_SLEEP);

  const calculateSleepScore = (responses) => {
    let sleepScore = 0;
    if (responses.SleepQuality <= 2) {
      return 100;
    } else if (responses.SleepQuality <= 3) {
      sleepScore = 50;
    }

      if (responses.SleepOnset <= 3) {
        return 100;
      } else if (responses.SleepOnset <= 4) {
        sleepScore = 50;
      }

        if (responses.AlertnessLevel <= 3) {
          return 100;
        } else if (responses.AlertnessLevel <= 4) {
          sleepScore = 50;
        }

          if (responses.InsomniaSigns <= 3) {
            return 100;
          } else if (responses.InsomniaSigns <= 4) {
            sleepScore = 50;
          }

            if (responses.SleepQuantity <= 3) {
              return 100;
            } else if (responses.SleepQuantity <= 4) {
              sleepScore = 50;
            }

              if (responses.NocturnalAwakenings <= 3) {
                return 100;
              } else if (responses.NocturnalAwakenings <= 4) {
                sleepScore = 50;
              }

              if (responses.MedicalHistory.length >= 3) {
                return 100;
              } else if (responses.MedicalHistory.length === 2) {
                return 50;
              }

              if (responses.SleepEnvironmentHabits.length >= 3) {
                return 100;
              } else if (responses.SleepEnvironmentHabits.length === 2) {
                return 50;
              }
      
            if (responses.SocialHistory.length >= 2) {
              return 100;
            } else if (responses.SocialHistory.length === 1) {
              return 50;
            }
            
    
    return sleepScore;
  };

  //sleep score categories
  const getSleepCategory = (score) => {
    if (score === 0) {
      return 'Few sleep issues';
    } else if (score === 50) {
      return 'Moderate sleep issues';
    } else {
      return 'Significant sleep issues';
    }
  };

  //function to generate sleep plans based on the sleep category
  const generateSleepPlan = (category) => {
    switch (category) {
      case 'Few sleep issues':
        return [
          'Practice relaxation techniques before bedtime, such as deep breathing, meditation, yoga or tai chi.',
          'Establish a consistent sleep schedule by going to bed and waking up at the same time every day, including weekends.',
          'Limit caffeine and alcohol intake, especially in the afternoon and evening.',
        ];
      case 'Moderate sleep issues':
        return [ 
          'Create a calm ritual before bedtime,such as taking a hot shower or bath, yoga postures for sleep, soothing music, meditation, to assist in preparing for sleep.',
          'Keep your bedroom cool, quiet, and dark to promote better sleep.',
          'Avoid heavy meals, alcohol, and vigorous exercise close to bedtime.',
        ];
      case 'Significant sleep issues':
        return [
          'Consider seeking help from a sleep specialist to address underlying sleep disorders.',
          'Limit screen time before bed and limit watching TV whilst in bed.',
          'Engage in regular physical activity during the day to promote better sleep at night.',
          'If you cannot fall asleep in 15-20 minutes, sit in a chair with dim lighting until you feel drowsy, then return to bed.',
          'Try to avoid day naps, or limit them to 20 minutes in the early afternoon.' 
        ];
      default:
        return '[]';
    }
  };

 
     const handleSubmit = useCallback((sender, options) => {
      let responses = [];
      Object.keys(sender.data).forEach((responseKey) => {
        responses.push({ name: responseKey, value: sender.data[responseKey].toString() });
      });

      if (Auth.loggedIn()) {
        // Calculate the sleep score, categorize and create plan
      const sleepScore = calculateSleepScore(sender.data);
      const sleepCategory = getSleepCategory(sleepScore);
      const sleepPlan = generateSleepPlan(sleepCategory);

      addSleep({ 
        variables: { 
        responses: responses,
        score: sleepScore,
        category: sleepCategory,
        plan: sleepPlan,
        },
      });
      options.showSaveSuccess();
    }
  }, [addSleep]);

  survey.onComplete.add(handleSubmit);

  return (
    <div className="form-container">
      <h1 className="text-4xl text-white font-bold">Sleep Questionnaire</h1>
      <Survey model={survey}/>;
    </div>
  );
};

//onChange: event handler to update the responses object with the new value for the question
 //Take a quiz to "update your score" after engaging in your "sleep plan" in four weeks: have as msg on ecah plan! 


export default SleepQuestionnaire;

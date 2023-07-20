
//Callback function: passed to another function as a parameter and is executed after some event has occured
import React, { useCallback, useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Survey, Model } from 'survey-react-ui';
import { useMutation } from '@apollo/client';
import { ADD_SLEEP } from '../utils/mutations';
import Auth from '../utils/auth';

 //import 'survey-core/modern.min.css'; modern theme
const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }, {
    name: "MedicalHistory",
    title: "What medical condtions may affect your sleep?",
    type: "checkbox",
    choices: [
      "Famiy history of sleep disorders",
      "History of cardiac and/or respitory problems",
      "Medical conditions that affect sleep",
      "Medications that affect sleep",
      "Weight change in the past year",
      "Joint pain or arthritis",
      "Seizures and/or epilepsy", 
      "History of sleep walking, sleep talking, and /or frequent nightmares", 
      "Dreamlike images on waking and/or falling asleep",
    ]
  }, 
  {
    name: 'SleepQuality',
    title: 'How would you rate the quality of your sleep?',
    type: "radiogroup",
    choices: [
      { value: '1', text: '1 - Very Poor' },
      { value: '2', text: '2 - Poor' },
      { value: '3', text: '3 - Fair' },
      { value: '4', text: '4 - Good' },
      { value: '5', text: '5 - Very Good' },
      { value: '6', text: '6 - Excellent' },
    ],
  },
  {
    name: 'Sleep onset',
    title: 'How long does it take you to fall asleep?',
    type: "radiogroup",
    choices: [
      { value: '1', text: '1 - I have trouble falling asleep' },
      { value: '2', text: '2 - More than 60 minutes' },
      { value: '3', text: '3 - 45-60 minutes' },
      { value: '4', text: '4 - 30-45 minutes' },
      { value: '5', text: '5 - 15-30 minutes' },
      { value: '6', text: '6 - Less than 15 minutes' },
    ],
  },
  {
    name: 'Alertness level',
    title: 'How alert do you feel right now?',
    type: "radiogroup",
    choices: [
      { value: '1', text: '1 - Very sleepy and fighting sleep' },
      { value: '2', text: '2 - Fogginess and slowing down' },
      { value: '3', text: '3 - Fatigued but not at peak'},
      { value: '4', text: '4 - Relaxed but not full alert' },
      { value: '5', text: '5 - Functioning at high level' },
      { value: '6', text: '6 - Wide awake and at your peak' },
    ],
  },
  {
    name: 'Insomnia signs',
    title: 'Do you experience any of the following ?',
    type: "checkbox",
    choices: [
      { value: '1', text: '1 - Are you unable to fall asleep in 15 minutes or less?' },
      { value: '2', text: '2 - Do you wake up several times during the night and cannot get back to sleep?' },
      { value: '3', text: '3 - Do you wake up too early in the morning?'},
      { value: '4', text: '4 - Do you feel unrefreshed when you wake up?' },
      { value: '5', text: '5 - Do you feel tired or sleepy during the day, even if you have had enough sleep?' },
      { value: '6', text: '6 - Do you have trouble concentrating during the day because you are sleepy?' },
    ],
  },
  {
    name: 'Sleep quantity',
    title: 'How many hours of sleep do you get on average?',
    type: "radiogroup",
    choices: [
      { value: '1', text: '1 - Between 1-4 hours' },
      { value: '2', text: '2 - Between 2-5 hours' },
      { value: '3', text: '3 - Between 3-6 hours' },
      { value: '4', text: '4 - Between 4-7 hours' },
      { value: '5', text: '5 - Between 5-8 hours' },
      { value: '6', text: '6 - Between 6-9 hours' },
    ],
  },
  {
    name: 'Nocturnal awakenings',
    title: 'How many times do you wake up during the night?',
    type: "radiogroup",
    choices: [
      { value: '1', text: '1 - 5+ times' },
      { value: '2', text: '2 - 4 times' },
      { value: '3', text: '3 - 3 times' },
      { value: '4', text: '4 - 2 times' },
      { value: '5', text: '5 - 1 time only' },
      { value: '6', text: '6 - I do not wake up during the night' },
    ],
  },
  {
    name: 'Sleep Envrionment Habits',
    title: 'What habits may affect your sleep?',
    type: "checkbox",
    choices: [
      { value: '1', text: '1 -  I drink coffee or tea' },
      { value: '2', text: '2 -  I drink alcohol in the evening' },
      { value: '3', text: '3 -  I smoke regularly' },
      { value: '4', text: '4 -  I eat late' },
      { value: '5', text: '5 -  I exercise late' },
      { value: '6', text: '6 -  I use my phone or computer before bed'},
      { value: '7', text: '7 -  I watch TV in bed' },
      { value: '8', text: '8 -  I have pets in my bedroom' },
      { value: '9', text: '9 -  I have a regular pattern of awakening and bedtime' },
    ],
  },
  {
    name: 'Social History',
    title: 'What social factors may affect your sleep?',
    type: "checkbox",
    choices: [
      { value: '1', text: '1 -  I have a stressful job' },
      { value: '2', text: '2 -  I have a stressful home life' },
      { value: '3', text: '3 -  I have a stressful social life' },
      { value: '4', text: '4 -  I have a stressful financial situation' },
      { value: '5', text: '5 -  I have a stressful health situation' },
      { value: '6', text: '6 -  I work night shifts or rotating shifts,including nights' },
    ],
  },
]};

const survey = new Model(surveyJson);

const SleepQuestionnaire = () => {
  const [addSleep, { error, data }] = useMutation(ADD_SLEEP);

  const calculateSleepScore = (responses) => {
    // #Calculate the sleep score based on the responses
    // summing the values of each response to get a sleep score.
    // design a more complex algorithm ??.
    const sleepScore = Object.values(responses).reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue),
      0
    );
    return sleepScore;
  };

  const getSleepCategory = (score) => {
    // #Categorize the sleep score into three categories
    if (score >= 0 && score < 30) {
      return 'Few sleep issues';
    } else if (score >= 30 && score < 60) {
      return 'Moderate sleep issues';
    } else {
      return 'Significant sleep issues';
    }
  };

  const handleSubmit = useCallback((sender, options) => {
    console.log(sender.data);
     let responses = [];
     Object.keys(sender.data).forEach((responseKey) => {
       responses.push({ name: responseKey, value: sender.data[responseKey].toString() });
     });

    
    if (Auth.loggedIn()) {
      // Calculate the sleep score
      //const sleepScore = calculateSleepScore(responses);
      const sleepScore = 1;

      // Categorize the sleep score
      //const sleepCategory = getSleepCategory(sleepScore);
      const sleepCategory = 'Few sleep issues';
      addSleep({ 
        variables: { 
        responses: responses,
       // sleepScore: sleepScore,
      //  sleepCategory: sleepCategory,
        },
      });
      options.showSaveSuccess();
    }
  }, [addSleep]);

  //handleSubmit: function to handle the form submission and data
  survey.onComplete.add(handleSubmit);

  return (
    <div className="form-container">
      <h1 className="text-4xl text-white font-bold">Sleep Questionnaire</h1>
      <Survey model={survey}/>;
    </div>
  );
};

export default SleepQuestionnaire;

//onChange: event handler to update the responses object with the new value for the question
 //Take a quiz to "update your score" after engaging in your "sleep plan" in four weeks) 

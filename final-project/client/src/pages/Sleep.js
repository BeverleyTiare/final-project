
//Callback function: passed to another function as a parameter and is executed after some event has occured
import React, { useCallback, useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Survey, Model } from 'survey-react-ui';
import { useMutation } from '@apollo/client';
import { ADD_SLEEP } from '../utils/mutations';
import Auth from '../utils/auth';

//Video: update! https://vimeo.com/806947756?share=copy
//<div>
//<div style={{padding:"91.67% 0 0 0", position: "relative"}}><iframe src="https://player.vimeo.com/video/842391142?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position: "absolute", top:0,left:0,width:"100%",height:"100%",}} title="sleep vid"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
//</div>


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
    name: "SleepHabits",
    title: "What habits may affect your sleep?",
    type: "checkbox",
    choices: [
      "I drink coffee or tea",
      "I drink alcohol",
      "I smoke",
      "I exercise",
      "I eat late at night",
      "I use my phone or computer before bed"
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
    name: 'Habits',
    title: 'What habits may affect your sleep?',
    type: "checkbox",
    choices: [
      { value: '1', text: '1 -  I drink coffee or tea' },
      { value: '2', text: '2 -  I drink alcohol in the evening' },
      { value: '3', text: '3 -  I smoke regularly' },
      { value: '4', text: '4 -  I eat late' },
      { value: '5', text: '5 -  I exercise late' },
      { value: '6', text: '6 -  I use my phone or computer before bed' },
    ],
  },
]};

const survey = new Model(surveyJson);
const SleepQuestionnaire = () => {
const [addSleep, { error, data }] = useMutation(ADD_SLEEP);
  

  const handleSubmit = useCallback((sender, options) => {
    console.log(sender.data);
     let responses = [];
     Object.keys(sender.data).forEach((responseKey) => {
       responses.push({ name: responseKey, value: sender.data[responseKey].toString() });
     });

    
    if (Auth.loggedIn()) {
      addSleep({ 
        variables: { responses: responses }, //pass responses to the mutation as an array of objects
      });
      options.showSaveSuccess();
    }
  });
  //handleSubmit: function to handle the form submission and data
  survey.onComplete.add(handleSubmit);
  return (
    <div className="form-container">
      <h1>Sleep Questionnaire</h1>
      <Survey model={survey}/>;
    </div>
  );
};



export default SleepQuestionnaire;

//onChange: event handler to update the responses object with the new value for the question
 
//https://aasm.org/resources/medsleep/(harding)questions.pdf
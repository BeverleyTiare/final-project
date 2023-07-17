
//https://aasm.org/resources/medsleep/(harding)questions.pdf
import React, { useCallback, useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Survey, Model } from 'survey-react-ui';
import { useMutation } from '@apollo/client';
import { ADD_SLEEP } from '../utils/mutations';


// Modern theme
 //import 'survey-core/modern.min.css';

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
      { value: '6', text: '6 - less than 15 minutes' },
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
      { value: '1', text: '1 - are you unable to fall asleep in 15 minutres or less?' },
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
      { value: '1', text: '1 - 1-4 hours' },
      { value: '2', text: '2 - 2-5 hours' },
      { value: '3', text: '3 - 3-6 hours' },
      { value: '4', text: '4 - 4-7 hours' },
      { value: '5', text: '5 - 5-8 hours' },
      { value: '6', text: '6 - 6-9 hours' },
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
      { value: '5', text: '5 - 1 times' },
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

//useState: hook to enable 
const SleepQuestionnaire = () => {
  // const [responses, setResponses] = useState({});
  const survey = new Model(surveyJson);
  const [addSleep, { error, data }] = useMutation(ADD_SLEEP);
  // const handleChange = (questionId, value) => {
  //   setResponses((prevResponses) => ({
  //     ...prevResponses,
  //     [questionId]: value,
  //   }));
  // };
  //handleChange: function to update responses object with the new value for the question

  const handleSubmit = useCallback((sender) => {
    //Process the form submission with the responses
    console.log(sender.data);
    // sender.data = {FirstName: 'John', LastName: 'Doe'}
    // we want [{ name: 'FirstName', value: 'John'}, { name: 'LastName', value: 'Doe' }]
    // let responses = [];
    // Object.keys(sender.data).forEach((responseKey) => {
    //   responses.push({ name: responseKey, value: sender.data[responseKey].toString() });
    // });

    const responses = Object.keys(sender.data).map(label => ({ name: label, value: sender.data[label].toString() }));
    console.log(responses)
    if (Auth.loggedIn()) {
      addSleep({ 
        variables: { responses: responses }, 
      });
    }
    // addSleep({ 
    //   variables: { responses: sender.data }, 
    // });
  });
  //handleSubmit: function to handle the form submission and data
  survey.onComplete.add(handleSubmit);
  return (
    <div className="form-container">
      <h1>Sleep Questionnaire</h1>
      <Survey model={survey}/>;


      {/*
      <form onSubmit={handleSubmit}>  

        {questions.map((question) => (
          <div className="question" key={question.id}>
            <label htmlFor={question.id}>{question.question}</label>
            {question.questionType === 'select' && (
              <select
                id={question.id}
                value={responses[question.id] || ''}
                onChange={(e) => handleChange(question.id, e.target.value)}
              >
                <option value="">Please select</option>
                {question.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {question.questionType === 'multiselect' && (
              <select
                id={question.id}
                value={responses[question.id] || ''}
                onChange={(e) => handleChange(question.id, e.target.value)}
                multiple
              >
                {question.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
                */}
        
      
      {/*
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label htmlFor="question1">How would you rate the quality of your sleep?</label>
          <select id="question1" value={responses.question1 || ''} onChange={(e) => handleChange('question1', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Fair</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Very Good</option>
            <option value="6">6 - Excellent</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="question2">How long does it usually take you to fall asleep?</label>
          <select id="question2" value={responses.question2 || ''} onChange={(e) => handleChange('question2', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - I have trouble falling asleep</option>
            <option value="2">2 - More than 60 minutes</option>
            <option value="3">3 - 45 to 60 minutes</option>
            <option value="4">4 - 30 to 45 minutes</option>
            <option value="5">5 - 15 to 30 minutes</option>
            <option value="6">6 - Less than 15 minutes</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="question3">How alert do you feel right now?</label>
          <select id="question3" value={responses.question3 || ''} onChange={(e) => handleChange('question3', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - Very sleepy and fighting sleep</option>
            <option value="2">2 - Fogginess and slowing down</option>
            <option value="3">3 - Fatigued but not at peak</option>
            <option value="4">4 - Relaxed but not fully alert</option>
            <option value="5">5 - Functioning at high level</option>
            <option value="6">6 - Wide awake and at your peak</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="question4">Do you have signs of insomnia?</label>
          <select id="question3" value={responses.question3 || ''} onChange={(e) => handleChange('question3', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - are you unable to fall asleep in 15 minutres or less?</option>
            <option value="2">2 - Do you wake up several times during the night and cannot get back to sleep?</option>
            <option value="3">3 - Do you wake up one or two hours early in the morning?</option>
            <option value="4">4 - Do you have thoughts racing through your mind while trying to fall asleep?</option>
            <option value="5">5 - Do you have anxiety which keeps you from sleeping?</option>
            <option value="6">6 - Do you have pain during the night or wake with muscle pain?</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="question3">Do you maintain a sleep plan?</label>
          <select id="question3" value={responses.question3 || ''} onChange={(e) => handleChange('question3', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - Go to bed at irregular times most nights</option>
            <option value="2">2 - Go to bed at irregular times some nights</option>
            <option value="3">3 - Go to border at irregular times rarely</option>
            <option value="4">4 - Go to bed at fairly consistent times during the week</option>
            <option value="5">5 - Go to bed at consistent times most nights</option>
            <option value="6">6 - Go to bed and wake up at very consistent times almost always</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="question3">How many times do you wake up during your sleep?</label>
          <select id="question3" value={responses.question3 || ''} onChange={(e) => handleChange('question3', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - Wake many times during the night</option>
            <option value="2">2 - Wake a few times during the night</option>
            <option value="3">3 - Wake once during the night and struggle to get back to sleep</option>
            <option value="4">4 - Wake sometimes during the night</option>
            <option value="5">5 - Wake rarely during the night</option>
            <option value="6">6 - Sleep through the night</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="question3">How is your work schedule?</label>
          <select id="question3" value={responses.question3 || ''} onChange={(e) => handleChange('question3', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - You are a shift worker?</option>
            <option value="2">2 - You work swing shifts?</option>
            <option value="3">3 - You have signficant jet lag when travelling</option>
            <option value="4">4 - You work days as well as some nights</option>
            <option value="5">5 - You work days with occassional overtime work</option>
            <option value="6">6 - You work regular days and no evenings</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="question3">How is your circadian rythym?</label>
          <select id="question3" value={responses.question3 || ''} onChange={(e) => handleChange('question3', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - Your have difficulty waking up in am and like to stay awake late in pm</option>
            <option value="2">2 - You sleep early, ie 8pm and wake early, ie 3am </option>
            <option value="3">3 - You go to sleep late and wake up early feeling tired</option>
            <option value="4">4 - Your go to sleep around 12pm and wake around 6am</option>
            <option value="5">5 - You sleep around 11pm and wake around 6am</option>
            <option value="6">6 - You sleep around 10pm and wake around 6 to 7 am</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="question3">What habits may affect your sleep?</label>
          <select id="question3" value={responses.question3 || ''} onChange={(e) => handleChange('question3', e.target.value)}>
            <option value="">Please select</option>
            <option value="1">1 - You smoke a significant quantity daily </option>
            <option value="2">2 - You drink alcohol before bedtime most nights</option>
            <option value="3">3 - You take very little exercise or go outside</option>
            <option value="4">4 - You drink caffeine throughout the day</option>
            <option value="5">5 - You sometimes engage in screentime before bed</option>
            <option value="6">6 - You have a bedtime ritual to relax before bed, ie bath, yoga, meditate</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      */}
    </div>
  );
};

//onChange: event handler to update the responses object with the new value for the question

export default SleepQuestionnaire;

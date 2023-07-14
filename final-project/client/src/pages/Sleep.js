//https://admin.typeform.com/form/ATFpS9yp/create?block=e2180d42be44ba18
//https://aasm.org/resources/medsleep/(harding)questions.pdf
import React, { useState } from 'react';
//useState: hook to enable 
const SleepQuestionnaire = () => {
  const [responses, setResponses] = useState({});

  const handleChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };
  //handleChange: function to update responses object with the new value for the question

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission with the responses
    console.log(responses);
  };
  //handleSubmit: function to handle the form submission and data

  return (
    <div className="form-container">
      <h1>Sleep Questionnaire</h1>
      <img src="./assets/baby.jpg" alt="Epigenetics and sleep" />
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
    </div>
  );
};

//onChange: event handler to update the responses object with the new value for the question

export default SleepQuestionnaire;

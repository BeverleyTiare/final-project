import React, { useState } from 'react';


//https://www.ouh.nhs.uk/children/services/medical-services/documents/sleep-questionnaire-over-11.pdf
const SleepQuestionnairePage = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [medicalDisease, setMedicalDisease] = useState('');
  const [medication, setMedication] = useState('');
  const [epilepsy, setEpilepsy] = useState(false);
  const [epilepsyDescription, setEpilepsyDescription] = useState('');
  const [frequentCoughs, setFrequentCoughs] = useState(false);
  const [smokeCigarettes, setSmokeCigarettes] = useState(false);
  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [otherSubstances, setOtherSubstances] = useState(false);
  const [otherSubstancesDescription, setOtherSubstancesDescription] = useState('');
  const [caffeinatedDrinks, setCaffeinatedDrinks] = useState(false);
  const [teaPerDay, setTeaPerDay] = useState('');
  const [coffeePerDay, setCoffeePerDay] = useState('');
  const [colaPerDay, setColaPerDay] = useState('');
  const [occupation, setOccupation] = useState('');
  const [sleepProblem, setSleepProblem] = useState('');
  const [sleepProblemDuration, setSleepProblemDuration] = useState('');
  const [timeToFallAsleep, setTimeToFallAsleep] = useState('');
  const [bedActivities, setBedActivities] = useState([]);
  const [troubleGettingAsleepFrequency, setTroubleGettingAsleepFrequency] = useState('');
  const [actionsWhenCannotSleep, setActionsWhenCannotSleep] = useState('');
  const [getOutOfBed, setGetOutOfBed] = useState(false);
  const [getOutOfBedActions, setGetOutOfBedActions] = useState('');
  const [annoyedWhenCannotSleep, setAnnoyedWhenCannotSleep] = useState(false);
  const [legsAchyBeforeSleep, setLegsAchyBeforeSleep] = useState(false);
  const [moveLegsInBed, setMoveLegsInBed] = useState(false);
  const [getOutOfBedForAchyLegs, setGetOutOfBedForAchyLegs] = useState(false);
  const [nightWakingsFrequency, setNightWakingsFrequency] = useState('');
  const [nightWakingsCount, setNightWakingsCount] = useState('');
  const [fallAsleepAgainTime, setFallAsleepAgainTime] = useState('');
  const [fallAsleepAgainActions, setFallAsleepAgainActions] = useState('');
  const [unusualSleepPositions, setUnusualSleepPositions] = useState(false);
  const [unusualSleepPositionsDescription, setUnusualSleepPositionsDescription] = useState('');
  const [poorSleepEffects, setPoorSleepEffects] = useState('');
  const [depressedByPoorSleep, setDepressedByPoorSleep] = useState(false);
  const [anxiousByPoorSleep, setAnxiousByPoorSleep] = useState(false);
  const [irritableByPoorSleep, setIrritableByPoorSleep] = useState(false);
  const [tiredByPoorSleep, setTiredByPoorSleep] = useState(false);
  const [poorSleepAffectsConcentration, setPoorSleepAffectsConcentration] = useState(false);
  const [poorSleepAffectsMemory, setPoorSleepAffectsMemory] = useState(false);
  const [poorSleepAffectsAbilityToWork, setPoorSleepAffectsAbilityToWork] = useState(false);
  const [desiredSleepDuration, setDesiredSleepDuration] = useState('');
  const [normalSleepDuration, setNormalSleepDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or other actions
  };

  return (
    <div>
      <h2>Sleep Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields and input elements */}
        {/* Example: */}
        <label>
          Height:
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        {/* Add other form fields based on the provided questionnaire */}
        {/* ... */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SleepQuestionnairePage;

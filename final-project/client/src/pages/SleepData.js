//RM??
/*import React, { useEffect, useState } from 'react';
import SleepDataList from '../components/SleepDataList';
import sleepAPI from '../utils/API/sleepAPI';

const SleepData = () => {
  const [sleepData, setSleepData] = useState([]);

  useEffect(() => {
    // Fetch sleep data from the API when the component mounts
    const fetchSleepData = async () => {
      try {
        const response = await sleepAPI.getSleepData();
        setSleepData(response.data);
      } catch (error) {
        console.error('Error fetching sleep data:', error);
      }
    };

    fetchSleepData();
  }, []);

  /*const handleSaveSleepData = (newSleepData) => {
    const updatedSleepData = [...sleepData, newSleepData];
    setSleepData(updatedSleepData);
    saveToLocalStorage(updatedSleepData);
  };*/

  /*return (
    <div>
      <h2>Sleep Data</h2>
      <SleepDataList sleepData={sleepData} />
    </div>
  );
};

export default SleepData;*/

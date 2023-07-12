
import React from 'react';
import SleepDataItem from './SleepDataItem';

const SleepDataList = ({ sleepData }) => {
  return (
    <ul>
      {sleepData.map((sleepItem) => (
        <SleepDataItem key={sleepItem.id} sleepItem={sleepItem} />
      ))}
    </ul>
  );
};

export default SleepDataList;

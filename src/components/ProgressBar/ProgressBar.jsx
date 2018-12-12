import React from 'react';
import './ProgressBar.css';

const ProgressBar = props => {
  const left = `${1 / props.totalSteps / 2 * 100}%`,
        width = `${(1 - 1 / props.totalSteps) * 100}%`,
        activeBarWidth = (props.step-1) / (props.totalSteps-1) * 100;

  return (
    <div className="ProgressBar"
         style={{left, width}}>
      <div className="ProgressBar__active-bar"
           style={{width: `${activeBarWidth}%`}}></div>
    </div>
  );
};

export default ProgressBar;

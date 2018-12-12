import React from 'react';
import './ProgressBar.css';

const ProgressBar = props => {
  const marginLeft = `${1 / props.totalSteps / 2 * 100}%`,
        width = `${(1 - 1 / props.totalSteps) * 100}%`,
        activeWidth = `${(props.step-1) / (props.totalSteps-1) * 100}%`;

  return (
    <div className="ProgressBar">
      <div className="ProgressBar__bar"
           style={{marginLeft, width}}>
        <div className="ProgressBar__active-bar"
             style={{width: activeWidth}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;

import React from 'react';
import './Step.css';

const Step = props => {
  const activeClass = (props.active) ? ' Step_active' : '';

  return (
    <div className={`Step${activeClass}`}>
      <div className="Step__text"
           onClick={() => props.setNextStep(props.number)} >
        {props.text}
      </div>
      <div className="Step__dot"
           onClick={() => props.setNextStep(props.number)}>
        <div className="Step__hole"></div>
      </div>
    </div>
  );
};

export default Step;

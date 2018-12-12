import React from 'react';
import { connect } from 'react-redux';
import './Progress.css';
import Step from './Step';
import ProgressBar from './ProgressBar';
import ErrorMessage from './ErrorMessage';
import * as actions from '../store/actions';

const MIN_STEPS = 2,
      MAX_STEPS = 5;

export const Progress = props => {
  const len = props.steps.length;
  if (len < MIN_STEPS) {
    return (
      <ErrorMessage>
        Number of steps should be at least {MIN_STEPS}
      </ErrorMessage>
    );
  }
  else if (len > MAX_STEPS) {
    return (
      <ErrorMessage>
        Maximun number of steps is {MAX_STEPS}
      </ErrorMessage>
    );
  }

  const steps = props.steps.map((s, i) => (
    <Step key={i}
          text={s}
          number={i+1}
          active={i+1 <= props.step}
          setNextStep={props.setNextStep} />
  ));

  return (
    <div className="Progress">
      <ProgressBar step={props.step} totalSteps={len} />
      <div className="Progress__steps">
        {steps}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    step: state.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNextStep: stepClicked => dispatch({
      type: actions.SET_NEXT_STEP,
      data: {stepClicked}
    })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Progress);

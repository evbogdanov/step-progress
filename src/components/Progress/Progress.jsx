import React from "react";
import { connect } from "react-redux";
import Step from "../Step/Step";
import ProgressBar from "../ProgressBar/ProgressBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as actions from "../../store/actions";
import styled from "styled-components";

const MIN_STEPS = 2;
const MAX_STEPS = 5;

const StyledProgress = styled.div`
  height: 80px;
`;

const StyledSteps = styled.div`
  margin-top: -80px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Progress = props => {
  const len = props.steps.length;
  if (len < MIN_STEPS) {
    return (
      <ErrorMessage>
        Number of steps should be at least {MIN_STEPS}
      </ErrorMessage>
    );
  } else if (len > MAX_STEPS) {
    return <ErrorMessage>Maximun number of steps is {MAX_STEPS}</ErrorMessage>;
  }

  const steps = props.steps.map((s, i) => (
    <Step
      key={i}
      text={s}
      number={i + 1}
      active={i + 1 <= props.step}
      setStep={props.setStep}
    />
  ));

  return (
    <StyledProgress>
      <ProgressBar step={props.step} totalSteps={len} />
      <StyledSteps>{steps}</StyledSteps>
    </StyledProgress>
  );
};

const mapStateToProps = state => {
  return {
    step: state.step
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStep: stepClicked =>
      dispatch({
        type: actions.SET_STEP,
        data: { stepClicked }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Progress);

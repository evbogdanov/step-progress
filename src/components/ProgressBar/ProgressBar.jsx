import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  height: 80px;
  overflow: auto;
`;

const Bar = styled.div`
  background: lightgray;
  height: 10px;
  margin-top: 55px;
  margin-left: ${props => `${(1 / props.totalSteps / 2) * 100}%`};
  width: ${props => `${(1 - 1 / props.totalSteps) * 100}%`};
`;

const ActiveBar = styled.div`
  background: blue;
  height: 10px;
  width: ${props => `${((props.step - 1) / (props.totalSteps - 1)) * 100}%`};
  transition: width 0.25s ease-in;
`;

const ProgressBar = props => {
  return (
    <StyledProgressBar>
      <Bar {...props}>
        <ActiveBar {...props} />
      </Bar>
    </StyledProgressBar>
  );
};

export default ProgressBar;

import React from "react";
import styled from "styled-components";

const StyledStep = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
`;

const Text = styled.div`
  height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 5px;
  cursor: pointer;
  color: ${props => (props.active ? "blue" : "lightgray")};
  transition: color 0.5s ease-in;
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${props => (props.active ? "blue" : "lightgray")};
  transition: color 0.5s ease-in;
`;

const Hole = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: white;
`;

const Step = props => {
  return (
    <StyledStep>
      <Text active={props.active} onClick={() => props.setStep(props.number)}>
        {props.text}
      </Text>
      <Dot active={props.active} onClick={() => props.setStep(props.number)}>
        <Hole />
      </Dot>
    </StyledStep>
  );
};

export default Step;

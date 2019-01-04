import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  background: pink;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;

const ErrorMessage = props => {
  return <Paragraph>{props.children}</Paragraph>;
};

export default ErrorMessage;

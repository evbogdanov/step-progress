import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = props => {
  return (
    <p className="ErrorMessage">
      {props.children}
    </p>
  );
};

export default ErrorMessage;

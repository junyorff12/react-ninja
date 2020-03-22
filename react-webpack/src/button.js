import React from 'react';

const Button = ({ children, handleClick }) => (
  <button className='mainButton' onClick={handleClick}>{children}</button>
);

export default Button;

import React from 'react';
import './Template.css';

const Template = props => {
  return <div {...props}>{props.children}</div>;
};
export default Template;

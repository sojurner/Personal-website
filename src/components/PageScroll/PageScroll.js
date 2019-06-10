import React from 'react';
import './PageScroll.css';

const PageScroll = ({ index, item, scrollTo, activeLi }) => (
  <li
    key={`jumbo-${index}`}
    tabIndex={index}
    className={index === activeLi ? 'scroll-active scroll-item' : 'scroll-item'}
    onClick={event => scrollTo(event, item['ref'])}
  />
);

export default PageScroll;

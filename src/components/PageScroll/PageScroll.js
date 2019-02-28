import React from 'react';

const PageScroll = ({ index, active, item, scrollTo }) => (
  <li
    key={`jumbo-${index}`}
    className={
      active === item['title'] ? 'scroll-active scroll-item' : 'scroll-item'
    }
    onClick={event => scrollTo(event, item['ref'], item['title'])}
  >
    {item['title']}
  </li>
);

export default PageScroll;

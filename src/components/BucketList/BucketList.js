import React from 'react';
import Slide from 'react-reveal/Slide';

import './BucketList.css';

export const BucketList = () => {
  return (
    <section className="bucket-items-section">
      <section className="bucket-items">
        <h3>Goals...</h3>
        <ul>
          <Slide left>
            <li>Build a site of great ideas</li>
          </Slide>
          <Slide right>
            <li>Work at Reddit</li>
          </Slide>
          <Slide left>
            <li>Live somewhere with no mosquitoes</li>
          </Slide>
          <Slide right>
            <li>
              Find all the{' '}
              <a
                className="live-simply"
                href="https://www.google.com/search?biw=1309&bih=725&tbm=isch&sa=1&ei=dhMKXIbADdD8jwT6yYCADw&q=live+simply+hats+patagonia&oq=live+simply+hats+patagonia&gs_l=img.3...17247.18825..18935...0.0..0.110.953.8j2......1....1..gws-wiz-img.ltS2TXTSZcc"
              >
                "Live Simply"
              </a>{' '}
              hats
            </li>
          </Slide>
          <Slide left>
            <li>Encounter a bear and survive</li>
          </Slide>
          <Slide right>
            <li>Try Franklin's BBQ</li>
          </Slide>
          <Slide left>
            <li>Experience true level</li>
          </Slide>
        </ul>
      </section>
    </section>
  );
};

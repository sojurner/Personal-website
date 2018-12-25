import React from 'react';

import './BucketList.css';

export const BucketList = () => {
  return (
    <section className="bucket-items-section">
      <section className="bucket-items">
        <h3>One Day I Will...</h3>
        <ul>
          <li>Build a site of great ideas</li>
          <li>Work at Reddit</li>
          <li>Live somewhere with no mosquitoes</li>
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

          <li>Encounter a bear and survive</li>
          <li>Try Franklin's BBQ</li>
          <li>Experience true level</li>
        </ul>
      </section>
    </section>
  );
};

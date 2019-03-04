import React from 'react';
import Fade from 'react-reveal/Fade';
import './BucketList.css';

const BucketList = ({ bucketRef }) => {
  return (
    <section className="bucket-items-section" ref={bucketRef}>
      <section className="bucket-items">
        <h3>Goals...</h3>
        <ul>
          <Fade top>
            <li
              onClick={() =>
                window.open(
                  'https://www.reddit.com/r/Showerthoughts/',
                  '_blank'
                )
              }
            >
              Work at Reddit
            </li>
          </Fade>
          <li className="checked-item">Serve in the Military</li>
          <Fade top>
            <li>Live somewhere with no mosquitoes</li>
          </Fade>
          <Fade bottom>
            <li>
              Find the{' '}
              <a
                className="live-simply"
                href="https://www.google.com/search?biw=1309&bih=725&tbm=isch&sa=1&ei=dhMKXIbADdD8jwT6yYCADw&q=live+simply+hats+patagonia&oq=live+simply+hats+patagonia&gs_l=img.3...17247.18825..18935...0.0..0.110.953.8j2......1....1..gws-wiz-img.ltS2TXTSZcc"
              >
                "Live Simply"
              </a>{' '}
              hats
            </li>
          </Fade>
          <Fade bottom>
            <li>Build a site of great ideas</li>
          </Fade>
          <Fade bottom>
            <li>Encounter a bear and survive</li>
          </Fade>
        </ul>
      </section>
    </section>
  );
};
export default BucketList;

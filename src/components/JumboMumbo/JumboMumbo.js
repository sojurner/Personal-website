import React from 'react';
import AboutTimeline from '../AboutTimeline/AboutTimeline';
import MainHeader from '../MainHeader/MainHeader';
import { BucketList } from '../BucketList/BucketList';

import './JumboMumbo.css';

const JumboMumbo = () => {
  return (
    <section className="main-page-jumbo">
      <MainHeader />
      <AboutTimeline />
      <BucketList />
    </section>
  );
};

export default JumboMumbo;

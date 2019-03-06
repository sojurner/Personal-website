import React from 'react';
import AboutTimeline from '../AboutTimeline/AboutTimeline';
import MainHeader from '../MainHeader/MainHeader';
import PageScroll from '../PageScroll/PageScroll';
import BucketList from '../BucketList/BucketList';

import './JumboMumbo.css';

class JumboMumbo extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.mainRef = React.createRef();
    this.aboutRef = React.createRef();
    this.bucketRef = React.createRef();
  }

  scrollTo = (event, ref, title) => {
    event.stopPropagation();
    ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.setState({ active: title, show: false });
  };

  render() {
    const { active } = this.state;
    const scrollNav = [
      { title: '', ref: this.mainRef },
      { title: '', ref: this.aboutRef },
      { title: '', ref: this.bucketRef }
    ];
    return (
      <section className="main-page-container">
        <aside className={'scroll-navigation'}>
          <ul className="scroll-nav">
            {scrollNav.map((item, index) => (
              <PageScroll
                scrollTo={this.scrollTo}
                index={index}
                active={active}
                item={item}
              />
            ))}
          </ul>
        </aside>
        <MainHeader mainRef={ref => (this.mainRef = ref)} />
        <AboutTimeline aboutRef={ref => (this.aboutRef = ref)} />
        <BucketList bucketRef={ref => (this.bucketRef = ref)} />
      </section>
    );
  }
}

export default JumboMumbo;

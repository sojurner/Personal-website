import React from 'react';
import AboutTimeline from '../AboutTimeline/AboutTimeline';
import MainLanding from '../MainLanding/MainLanding';
import PageScroll from '../PageScroll/PageScroll';
import BucketList from '../BucketList/BucketList';

import './JumboMumbo.css';

class JumboMumbo extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      mainRef: null,
      aboutRef: null,
      bucketRef: null,
      title: false,
      activeLi: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ title: true });
    }, 1000);
  }

  setMainRef = mainRef => {
    this.setState({ mainRef });
  };

  setAboutRef = aboutRef => {
    this.setState({ aboutRef });
  };

  setBucketRef = bucketRef => {
    this.setState({ bucketRef });
  };

  scrollTo = (event, ref) => {
    event.stopPropagation();
    this.setState({ activeLi: event.currentTarget.tabIndex });
    ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  render() {
    const { activeLi, mainRef, aboutRef, bucketRef, title } = this.state;
    const scrollNav = [
      { title: '', ref: mainRef },
      { title: '', ref: aboutRef },
      { title: '', ref: bucketRef }
    ];
    return (
      <section className="main-page-container">
        <aside className={'scroll-navigation'}>
          <ul className="scroll-nav">
            {scrollNav.map((item, index) => (
              <PageScroll
                key={`scroll-${index}`}
                scrollTo={this.scrollTo}
                index={index}
                activeLi={activeLi}
                item={item}
              />
            ))}
          </ul>
        </aside>
        <MainLanding titleClass={title} mainRef={this.setMainRef} />
        <AboutTimeline aboutRef={this.setAboutRef} />
        <BucketList bucketRef={this.setBucketRef} />
      </section>
    );
  }
}

export default JumboMumbo;

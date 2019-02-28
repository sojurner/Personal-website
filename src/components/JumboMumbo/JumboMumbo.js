import React from 'react';
import AboutTimeline from '../AboutTimeline/AboutTimeline';
import MainHeader from '../MainHeader/MainHeader';
import BucketList from '../BucketList/BucketList';
import PageScroll from '../PageScroll/PageScroll';

import './JumboMumbo.css';

class JumboMumbo extends React.Component {
  constructor() {
    super();
    this.state = {
      active: '',
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

  toggleScrollNav = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { show, active } = this.state;
    const scrollNav = [
      { title: 'Main', ref: this.mainRef },
      { title: 'Experience', ref: this.aboutRef },
      { title: 'Goals', ref: this.bucketRef }
    ];
    return (
      <section className="main-page-container">
        <aside className={'scroll-navigation'}>
          <i
            className={!show ? 'fas fa-ellipsis-v' : 'fas fa-times'}
            onClick={this.toggleScrollNav}
          />
          <ul className={show ? 'scroll-nav' : 'scroll-nav-hide'}>
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

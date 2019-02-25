import React from 'react';
import AboutTimeline from '../AboutTimeline/AboutTimeline';
import MainHeader from '../MainHeader/MainHeader';
import BucketList from '../BucketList/BucketList';

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
    const scrollNav = [
      { title: 'Main', ref: this.mainRef },
      { title: 'Experience', ref: this.aboutRef },
      { title: 'Goals', ref: this.bucketRef }
    ];
    return (
      <section className="main-page-container">
        <aside className={'scroll-navigation'}>
          <i
            className={!this.state.show ? 'fas fa-ellipsis-v' : 'fas fa-times'}
            onClick={this.toggleScrollNav}
          />
          <ul className={this.state.show ? 'scroll-nav' : 'scroll-nav-hide'}>
            {scrollNav.map((item, index) => {
              return (
                <li
                  key={`jumbo-${index}`}
                  className={
                    this.state.active === item['title']
                      ? 'scroll-active scroll-item'
                      : 'scroll-item'
                  }
                  onClick={event =>
                    this.scrollTo(event, item['ref'], item['title'])
                  }
                >
                  {item['title']}
                </li>
              );
            })}
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

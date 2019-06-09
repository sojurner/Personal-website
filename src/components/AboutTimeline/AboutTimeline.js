import React from 'react';
import './AboutTimeline.css';
import {
  experienceInfo,
  educationInfo
} from '../../assets/data/ProfessionalData';

class AboutTimeline extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTimeline: 'Experience',
      activeInfo: experienceInfo[experienceInfo.length - 1]
    };
    this.parentRef = React.createRef();
    this.experienceContentRefs = experienceInfo.map(_ => React.createRef());
    this.educationContentRefs = educationInfo.map(_ => React.createRef());
  }

  componentDidMount() {
    const activeInfo = experienceInfo.sort((a, b) => {
      return b.start - a.start;
    })[0];
    console.log(this.experienceContentRefs);
    console.log(this.educationContentRefs);
    this.setState({ activeInfo });
  }

  showYearInfo = activeInfo => {
    if (activeInfo !== this.state.activeInfo) {
      this.setState({ activeInfo });
      const targetRef = this.locateRef(activeInfo, this.state.activeTimeline);
      this.parentRef.scrollTo({
        left: targetRef.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  locateRef = (activeInfo, activeTimeline) => {
    if (activeTimeline === 'Experience') {
      return this.experienceContentRefs.find(
        ref => ref.id === activeInfo.career
      );
    } else {
      return this.educationContentRefs.find(
        ref => ref.id === activeInfo.institution
      );
    }
  };

  setTimeline = activeTimeline => {
    if (this.state.activeTimeline !== activeTimeline) {
      const targetRef = this.locateRef(
        this.state.activeInfo,
        this.state.activeTimeline
      );
      let activeInfo;
      activeTimeline === 'Education'
        ? (activeInfo = educationInfo[0])
        : (activeInfo = experienceInfo[0]);
      this.parentRef.scrollTo({
        left: targetRef.offsetLeft,
        behavior: 'smooth'
      });
      this.setState({ activeTimeline, activeInfo });
    }
  };

  render() {
    const { aboutRef } = this.props;
    const aboutTabs = ['Experience', 'Education'];
    const sortedInfo = experienceInfo.sort((a, b) => b.start - a.start);
    const sortedEducation = educationInfo.sort((a, b) => b.start - a.start);
    return (
      <section className="jumbo-experience-education" ref={aboutRef}>
        <aside className="timeline-bar">
          <nav className="experience-education-nav">
            {aboutTabs.map((tab, index) => (
              <span
                key={`experience-education-nav-${index}`}
                className={
                  this.state.activeTimeline === tab
                    ? 'about-tab-active about-tab'
                    : 'about-tab'
                }
                onClick={this.setTimeline.bind(null, tab)}
              >
                {tab}
              </span>
            ))}
          </nav>
          <section className="year-section">
            {this.state.activeTimeline === 'Experience' &&
              experienceInfo.map(item => (
                <span
                  key={`about-${item.career}`}
                  className={
                    this.state.activeInfo.start === item.start
                      ? 'year-item year-item-active'
                      : 'year-item'
                  }
                  onClick={this.showYearInfo.bind(null, item)}
                >
                  {item.start} - {item.end}
                </span>
              ))}
            {this.state.activeTimeline === 'Education' &&
              educationInfo.map(item => (
                <>
                  <span
                    key={`about-${item.institution}`}
                    className={
                      this.state.activeInfo.start === item.start
                        ? 'year-item year-item-active'
                        : 'year-item'
                    }
                    onClick={this.showYearInfo.bind(null, item)}
                  >
                    {item.start} - {item.end}
                  </span>
                </>
              ))}
          </section>
          <img
            alt="professional emblem"
            className="professional-emblem"
            src={
              this.state.activeTimeline === 'Experience'
                ? `https://res.cloudinary.com/paulkim/image/upload/v1552393728/images/professional/${
                    this.state.activeInfo.img
                  }`
                : `https://res.cloudinary.com/paulkim/image/upload/v1552393728/images/education/${
                    this.state.activeInfo.img
                  }`
            }
          />
        </aside>
        <main ref={ref => (this.parentRef = ref)} className="about-content">
          {this.state.activeTimeline === 'Experience' &&
            sortedInfo.map((item, index) => {
              return (
                <>
                  <section
                    key={`${item.career}-${index}`}
                    id={item.career}
                    className="about-item-content"
                    ref={ref => (this.experienceContentRefs[index] = ref)}
                  >
                    <header>
                      <h2>{item.career}</h2>
                      <h4>{item.company}</h4>
                    </header>
                    <p>{item.details}</p>
                  </section>
                </>
              );
            })}
          {this.state.activeTimeline === 'Education' &&
            sortedEducation.map((item, index) => {
              const { institution, details } = item;
              return (
                <section
                  key={`${institution}-${index}`}
                  id={institution}
                  className="about-item-content"
                  ref={ref => (this.educationContentRefs[index] = ref)}
                >
                  <header>
                    <h2>{institution}</h2>
                  </header>
                  <p>{details}</p>
                </section>
              );
            })}
          <span className="about-item-content" />
        </main>
      </section>
    );
  }
}
export default AboutTimeline;

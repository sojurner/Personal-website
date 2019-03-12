import React from 'react';
import './AboutTimeline.css';
import {
  experienceInfo,
  educationInfo
} from '../../assets/data/ProfessionalData';
import Skillset from '../Skillset/Skillset';

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

  showYearInfo = (activeInfo, section) => {
    if (activeInfo !== this.state.activeInfo) {
      this.setState({ activeInfo });
      let targetRef;
      section === 'experience'
        ? (targetRef = this.experienceContentRefs.find(
            ref => ref.id === activeInfo.career
          ))
        : (targetRef = this.educationContentRefs.find(
            ref => ref.id === activeInfo.institution
          ));
      this.parentRef.scrollTo({
        left: targetRef.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  setTimeline = activeTimeline => {
    if (this.state.activeTimeline !== activeTimeline) {
      let activeInfo;
      activeTimeline === 'education'
        ? (activeInfo = educationInfo[1])
        : (activeInfo = experienceInfo[0]);
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
                  onClick={this.showYearInfo.bind(null, item, 'experience')}
                >
                  {item.start} - {item.end}
                </span>
              ))}
            {this.state.activeTimeline === 'Education' &&
              educationInfo.map(item => (
                <span
                  key={`about-${item.institution}`}
                  className={
                    this.state.activeInfo.start === item.start
                      ? 'year-item year-item-active'
                      : 'year-item'
                  }
                  onClick={this.showYearInfo.bind(null, item, 'education')}
                >
                  {item.start} - {item.end}
                </span>
              ))}
          </section>
        </aside>
        <main ref={ref => (this.parentRef = ref)} className="about-content">
          {this.state.activeTimeline === 'Experience' &&
            sortedInfo.map((item, index) => {
              return (
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
                  {item.career === 'Developer' && <Skillset />}
                  {item.career !== 'Developer' && (
                    <img
                      alt="professional emblem"
                      height={100}
                      src={`https://res.cloudinary.com/paulkim/image/upload/v1552393728/images/professional/${
                        item.img
                      }`}
                    />
                  )}
                </section>
              );
            })}
          {this.state.activeTimeline === 'Education' &&
            sortedEducation.map((item, index) => {
              const { institution, details, img } = item;
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
                  <img
                    alt={`Education logo`}
                    src={`https://res.cloudinary.com/paulkim/image/upload/v1552394010/images/education/${img}`}
                  />
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

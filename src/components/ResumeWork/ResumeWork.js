import React from 'react';

import { allProjects } from '../../assets/ProjectData';
import ProjectModal from '../ProjectModal/ProjectModal';

class ResumeWork extends React.Component {
  state = {
    hoveredItem: '',
    show: false,
    project: null,
    modal: null
  };

  handleOpen = name => {
    const project = allProjects.find(proj => proj.title === name);
    import('../ProjectModal/ProjectModal').then(component => {
      this.setState({ show: true, project, modal: component.default });
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleHover = hoveredItem => {
    this.setState({ hoveredItem });
  };

  render() {
    const { show, project, hoveredItem } = this.state;
    const recentWork = ['Event-mapper', 'Movie-tracker', 'Fantasy-futbol'];
    return (
      <section className="resume-recent-work">
        <span className="recent-work">
          <i className="fas fa-code-branch" />
          Recent Work
        </span>
        <span className="recent-work-img">
          {recentWork.map((item, index) => {
            return (
              <span key={`work-${index}`} className="recent-work-gifs">
                <img
                  height="150"
                  width="200"
                  alt="Tech stack skills"
                  className={
                    item === hoveredItem
                      ? `recent-work-gif recent-work-gif-${index} recent-work-gif-active`
                      : `recent-work-gif recent-work-gif-${index}`
                  }
                  name={item}
                  src={require(`../../assets/Images/project-ss/${item}.png`)}
                  onMouseEnter={this.handleHover.bind(null, item)}
                  onMouseLeave={this.handleHover.bind(null, '')}
                  onClick={this.handleOpen.bind(null, item)}
                />
                {hoveredItem === item ? (
                  <span className={`resume-project resume-project-${index}`}>
                    Click to view
                  </span>
                ) : (
                  <span className={`resume-project resume-project-${index}`}>
                    {item}
                  </span>
                )}
              </span>
            );
          })}
        </span>
        {show && (
          <ProjectModal
            show={show}
            handleClose={this.handleClose}
            project={project}
          />
        )}
      </section>
    );
  }
}

export default ResumeWork;

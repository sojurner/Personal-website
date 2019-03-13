import React from 'react';
import { Tooltip } from 'react-bootstrap';

export const data = {
  skills: {
    JavaScript: {
      width: '330',
      height: '8',
      x: '95',
      y: '25',
      tooltip: 'ES7, REST API, JSON'
    },
    React: {
      width: '350',
      height: '8',
      x: '95',
      y: '50',
      tooltip: 'React-Router, MapboxGL, React-Charts'
    },
    'Vue.JS': {
      width: '200',
      height: '8',
      x: '95',
      y: '75',
      tooltip: 'Vuex, VueCLI'
    },
    'Node.JS': {
      width: '180',
      height: '8',
      x: '95',
      y: '100',
      tooltip: 'Express, Nightmare, Knex, '
    },
    Redux: {
      width: '350',
      height: '8',
      x: '95',
      y: '125',
      tooltip: ''
    },
    HTML5: {
      width: '330',
      height: '8',
      x: '95',
      y: '150',
      tooltip: ''
    },
    CSS3: {
      width: '280',
      height: '8',
      x: '95',
      y: '175',
      tooltip: ''
    },
    Jest: {
      width: '350',
      height: '8',
      x: '95',
      y: '200',
      tooltip: ''
    },
    Enzyme: {
      width: '330',
      height: '8',
      x: '95',
      y: '225',
      tooltip: ''
    }
  },
  tools: ['VS Code', 'Git', 'GitHub', 'Heroku', 'PostgreSQL']
};

export const iconContent = [
  {
    tooltip: (
      <Tooltip id="github">
        <strong>Github</strong>
      </Tooltip>
    ),
    position: 'right',
    name: 'github',
    url: 'https://www.github.com/sojurner'
  },
  {
    tooltip: (
      <Tooltip id="linkedin">
        <strong>LinkedIn</strong>
      </Tooltip>
    ),
    name: 'linkedin',
    position: 'left',

    url: 'https://www.linkedin.com/in/paulkim-sojurner/'
  },
  {
    tooltip: (
      <Tooltip id="mail">
        <strong>E-Mail</strong>
      </Tooltip>
    ),
    name: 'email',
    position: 'right',
    url: 'paul.kim0591@gmail.com'
  },
  {
    tooltip: (
      <Tooltip id="phone">
        <strong>562-483-9937</strong>
      </Tooltip>
    ),
    name: 'phone',
    position: 'bottom',
    url: ''
  }
];

export const experienceInfo = [
  {
    career: 'File Clerk',
    company: 'Giardi & Keese',
    details: 'Responsible for file management and storage',
    start: 2009,
    end: 2011,
    img: 'gk.png'
  },
  {
    career: 'Combat Medic',
    company: 'US Army',
    details:
      '168th MMB Camp Walker, Daegu, Republic of Korea\n Lyster Army Health Clinic Fort Rucker, AL',
    start: 2013,
    end: 2017,
    img: '65med-patch.png'
  },
  {
    career: 'Developer',
    details: 'React, Redux, React-Router, Jest, HTML5, CSS3, Vue, Webpack, Git',
    start: 2017,
    end: 'Now'
  }
];

export const educationInfo = [
  {
    institution: 'Turing School',
    details:
      'Front-end engineering Program; Emphasis on React, Redux, JavaScript, HTML and CSS',
    start: 2018,
    end: 'Now',
    img: 'turing.png'
  },
  {
    institution: 'Pacific Union College',
    details: 'Majored in Biology with emphasis on medicine',
    start: 2009,
    end: 2013,
    img: 'puc-logo.png'
  }
];

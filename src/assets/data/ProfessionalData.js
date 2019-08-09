import React from 'react';
import { Tooltip } from 'react-bootstrap';

const height = '10';
const x = '100';

export const data = {
  skills: {
    JavaScript: {
      width: '350',
      height,
      x,
      y: '25',
      tooltip: 'ES7, REST API, JSON'
    },
    React: {
      width: '400',
      height,
      x,
      y: '50',
      tooltip: 'React-Router, MapboxGL, React-Charts'
    },
    TypeScript: {
      width: '300',
      height,
      x,
      y: '75',
      tooltip: 'Vuex, VueCLI'
    },
    'Material-UI': {
      width: '290',
      height,
      x,
      y: '100',
      tooltip: 'Express, Nightmare, Knex, '
    },
    Redux: {
      width: '350',
      height,
      x,
      y: '125',
      tooltip: ''
    },
    HTML5: {
      width: '330',
      height,
      x,
      y: '150',
      tooltip: ''
    },
    CSS3: {
      width: '310',
      height,
      x,
      y: '175'
    },
    Jest: {
      width: '350',
      height,
      x,
      y: '200'
    }
  },
  tools: ['VS Code', 'Git', '', 'StoryBook', 'PostgreSQL']
};

export const iconContent = [
  {
    tooltip: (
      <Tooltip id="github">
        <strong>Github</strong>
      </Tooltip>
    ),
    position: 'top',
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
    position: 'top',

    url: 'https://www.linkedin.com/in/paulkim-sojurner/'
  },
  {
    tooltip: (
      <Tooltip id="mail">
        <strong>paul.kim0591</strong>
        <br />
        <strong>@gmail</strong>
      </Tooltip>
    ),
    name: 'email',
    position: 'bottom',
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
    details: 'File management and storage',
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
    career: 'Front-End Dev',
    company: 'Catalyst Healthcare',
    details: 'React, Material-Ui, Redux, Jest, Typescript, Webpack',
    start: 2017,
    end: 'Now',
    img: 'catalyst-logo.png'
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

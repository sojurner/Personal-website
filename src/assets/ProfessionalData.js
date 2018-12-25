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
    name: 'logo-github',
    url: 'https://www.github.com/sojurner'
  },
  {
    tooltip: (
      <Tooltip id="linkedin">
        <strong>LinkedIn</strong>
      </Tooltip>
    ),
    name: 'logo-linkedin',
    url: 'https://www.linkedin.com/in/paulkim-sojurner/'
  },
  {
    tooltip: (
      <Tooltip id="mail">
        <strong>E-Mail</strong>
      </Tooltip>
    ),
    name: 'mail',
    url: 'https://www.github.com/sojurner'
  },
  {
    tooltip: (
      <Tooltip id="phone">
        <strong>562-483-9937</strong>
      </Tooltip>
    ),
    name: 'call',
    url: ''
  }
];

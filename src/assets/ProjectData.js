export const allProjects = [
  {
    title: 'Minecraft',
    projectType: 'Compositions',
    description:
      'Minecraft-inspired static webpage with emphasis on CSS grid and responsive design',
    githubURL: 'https://github.com/sojurner/Static-Composition-1',
    githubPages: 'https://sojurner.github.io/Static-Composition-1/'
  },
  {
    title: 'Avatar',
    description:
      'Avatar-inspired static webpage with emphasis on CSS grid/flex, responsiveness, and card display',
    projectType: 'Compositions',
    githubURL: 'https://github.com/sojurner/Static-Composition-2',
    githubPages: 'https://sojurner.github.io/Static-Composition-2/'
  },
  {
    title: 'Amumu',
    projectType: 'Compositions',
    description:
      'League of legends inspired static webpage with emphasis on responsiveness and element spacing',
    githubURL: 'https://github.com/sojurner/Static-Comp-3',
    githubPages: 'https://sojurner.github.io/Static-Comp-3/'
  },
  {
    title: 'Event-mapper',
    projectType: 'Redux',
    description:
      'Find the most popular events near your area.  Search by city and/or date and add an event to your watchlist',
    githubURL: 'https://github.com/sojurner/Event-Mapper',
    githubPages: 'https://event--mapper.herokuapp.com/'
  },
  {
    title: 'Fantasy-futbol',
    projectType: 'Redux',
    description:
      'Create your own league, add users, and create soccer team with Fantasy-futbol.  Users can search by country, player name, and/or club and view player stats.',
    githubURL: 'https://github.com/sojurner/fantasy-futbol_client',
    githubPages: 'https://fantasy-futbol-app.herokuapp.com/'
  },
  {
    title: 'Movie-tracker',
    projectType: 'Redux',
    description:
      'Track most recent movies and view their trailers. Sign-up and select favorites to keep track of upcoming movies',
    githubURL: 'https://github.com/sojurner/Movie-Tracker',
    githubPages: 'https://movie-tracker-client.herokuapp.com/'
  },
  {
    title: 'Stravant',
    projectType: 'Redux',
    description:
      'Checkout out your fitness Activity from Strava and track your Pomodoros',
    githubURL: 'https://github.com/sojurner/Stravant',
    githubPages: 'https://stravant.herokuapp.com/'
  },
  {
    title: 'Swapi-box',
    projectType: 'React',
    description:
      'Checkout the characters, vehicles, and planet information from the Star Wars series',
    githubURL: 'https://github.com/sojurner/swapi-box',
    githubPages: 'https://sojurner.github.io/swapi-box/'
  },
  {
    title: 'Headcount',
    projectType: 'React',
    description:
      'Compare student grade averages between two districts in Colorado.',
    githubURL: 'https://github.com/sojurner/headcount2.0',
    githubPages: 'https://sojurner.github.io/headcount2.0/'
  },
  {
    title: 'Polo-picker',
    projectType: 'JavaScript',
    description:
      'Does that Shirt look good on you?  Well with Polo Picker you can find out!  Create a project and add a palette of polos to view later.',
    githubURL: 'https://github.com/sojurner/Polo-picker',
    githubPages: 'https://polo--picker.herokuapp.com/'
  },
  {
    title: 'Tron',
    projectType: 'JavaScript',
    description:
      'Recreation of Tron game with HTML Canvas and focus on Object-Oriented Programming',
    githubURL: 'https://github.com/sojurner/game-time-1',
    githubPages: 'https://michaelyons.github.io/game-time/',
    gif: '../../tron.gif'
  },
  {
    title: 'Number-guesser',
    projectType: 'JavaScript',
    description:
      'Guess a Number!  Whether its too high or too low, Number-guesser will let you know.  Built using Vanilla JS, HTML5 ',
    githubURL: 'https://github.com/sojurner/Number-Guesser',
    githubPages: 'https://sojurner.github.io/Number-Guesser/'
  },
  {
    title: 'Linked-list',
    projectType: 'JavaScript',
    description:
      'Bookmark your favorite sites, check them off after reading them, and delete',
    githubURL: 'https://github.com/sojurner/linked-list',
    githubPages: 'https://sojurner.github.io/linked-list/'
  },
  {
    title: '2Do-box',
    projectType: 'JavaScript',
    description:
      'Save your to-dos and Rate them by importance.  also Search for specific to-dos and delete when completed',
    githubURL: 'https://github.com/sojurner/2DoBox-Pivot',
    githubPages: 'https://sojurner.github.io/2DoBox-Pivot/'
  }
];

export const timeline = [
  {
    title: 'College',
    name: 'Pacific Union College',
    details: 'BS Biology',
    body: 'Studied Biology in pursuit of medicine',
    startYear: 2009,
    endYear: 2013,
    img:
      'http://d21gd0ap5v1ndt.cloudfront.net/web01/puc/images_web/logo-puc.png',
    description: {}
  },
  {
    title: 'Military',
    name: 'U.S. Army',
    details: 'Combat Medic',
    startYear: 2013,
    endYear: 2017,
    show: false,
    img: 'http://www.clker.com/cliparts/r/3/q/h/V/z/caduceus-pink-hi.png',
    description: [
      {
        title: '168th MMB',
        body: 'Combat Medic in Area IV',
        location: 'Daegu, S. Korea',
        startYear: 2013,
        endYear: 2015
      },
      {
        title: 'Lyster Army Health Clinic',
        body:
          'Environmental Health technician at the Preventive Medicine department',
        location: 'FortRucker, AL',
        startYear: 2015,
        endYear: 2017
      }
    ]
  },
  {
    title: 'Software Development',
    name: 'Turing',
    details: 'Front-end Developer',
    body:
      'Seven month long coding bootcamp focusing on JavaScript, React, Redux, Node/Express',
    startYear: 2017,
    endYear: '',
    img:
      'https://static1.squarespace.com/static/59a6f9d3579fb360d747292d/5ac68cbe758d46c0754f6433/5ac68d44aa4a99ed1aa5a4a6/1523039439760/TuringSchool_LogoHorizontal_White.png?format=500w',
    description: {
      skills: {
        React:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
      }
    }
  }
];

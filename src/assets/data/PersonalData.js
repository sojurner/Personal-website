export const bucketList = [
  {
    type: 'personal',
    in_progress: true,
    completed: false,
    description: 'Try Franklins BBQ',
    img_url:
      'http://www.somuchlife.com/wp-content/uploads/2018/08/how-long-is-the-wait-at-franklin-barbecue-3-734x1024.jpg'
  },
  {
    type: 'personal',
    in_progress: false,
    completed: false,
    description: 'Survive a bear encounter',
    img_url:
      'https://www.pngarts.com/files/3/Bear-PNG-Image-with-Transparent-Background.png'
  },
  {
    type: 'personal',
    in_progress: true,
    completed: false,
    description: 'Live in a mosquito free country',
    img_url:
      'https://www.pngarts.com/files/3/Bear-PNG-Image-with-Transparent-Background.png'
  },
  {
    type: 'professional',
    in_progress: false,
    completed: true,
    description: 'Serve in the military',
    img_url: 'https://wallpaperaccess.com/full/169519.png'
  },
  {
    type: 'personal',
    in_progress: true,
    completed: false,
    description: "Find all the 'Live Simply' hats"
  },
  {
    type: 'professional',
    in_progress: true,
    completed: false,
    description: 'Work at Reddit',
    img_url: 'http://imgur.com/5BxLu.png'
  },
  {
    type: 'personal',
    in_progress: false,
    completed: false,
    description: 'Eat at Sukiyabashi Jiro',
    img_url:
      'https://static-2.gumroad.com/res/gumroad/9845270552677/asset_previews/004b808d7ee222cd1fd45ee50e4594a7/retina/jiro.jpg'
  },
  {
    type: 'professional',
    in_progress: false,
    completed: false,
    description: 'Create a site that brings great minds togethers',
    img_url:
      'https://dumielauxepices.net/sites/default/files/yinyang-tattoos-clipart-life-829848-2555699.jpg'
  },
  {
    type: 'personal',
    in_progress: false,
    completed: false,
    description: 'Live off grid for a month',
    img_url:
      'http://static1.squarespace.com/static/55baa581e4b07667303dba6d/55bab8a5e4b0690834e18a63/55d7c71ee4b0d420c0dbc8ef/1442613767080/?format=1500w'
  },
  {
    type: 'professional',
    in_progress: true,
    completed: false,
    description: 'Work remotely',
    img_url:
      'https://static1.squarespace.com/static/5772d5b09de4bb81b44f2253/5772d80715d5db1a2b8e9901/5ab3aa22352f5348400870bc/1521730544309/nathan-riley-514162-unsplash.jpg?format=2500w'
  },
  {
    type: 'personal',
    in_progress: false,
    completed: true,
    description: 'Meet relatives for the first time',
    img_url: 'family_cropped.png'
  }
];

const hashrocketUrl = 'https://til.hashrocket.com/';
const devHintsUrl = 'https://devhints.io/';
const owaspURL = 'https://cheatsheetseries.owasp.org/';

export const resourceList = [
  {
    link: hashrocketUrl,
    name: 'Hash Rocket',
    logo:
      'https://cdn.hashrocket.com/assets/brand/hr_logo_h-0e1c864918fde29fdf7fb0ac10d0a2f3ac6c654d821725c1a60e4b5f3117ceaa.png',
    description: 'Random Programming Facts',
    subLinks: [
      {
        link: `${hashrocketUrl}/html-css`,
        name: 'HTML - CSS'
      },
      {
        link: `${hashrocketUrl}/javascript`,
        name: 'Javascript'
      },
      {
        link: `${hashrocketUrl}/react`,
        name: 'React'
      },
      {
        link: `${hashrocketUrl}/ruby`,
        name: 'Ruby'
      }
    ]
  },
  {
    link: devHintsUrl,
    name: 'Dev Hints',
    logo: 'http://i.imgur.com/Mr9pvq9.jpg',
    description: 'Collection of Cheatsheets by Rico',
    subLinks: [
      {
        link: `${devHintsUrl}/awesome-redux`,
        name: 'Redux'
      },
      {
        link: `${devHintsUrl}/react`,
        name: 'React'
      },
      {
        link: `${devHintsUrl}/jest`,
        name: 'Jest'
      },
      {
        link: `${devHintsUrl}/typescript`,
        name: 'TypeScript'
      }
    ]
  },
  {
    link: owaspURL,
    name: 'OWASP',
    logo:
      'https://cheatsheetseries.owasp.org/assets/Preface_Cheatsheet_Logo.png',
    description: 'Application Security Topics',
    subLinks: [
      {
        link: `${owaspURL}/cheatsheets/HTML5_Security_Cheat_Sheet.html`,
        name: 'HTML5 Security'
      },
      {
        link: `${owaspURL}/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html`,
        name: 'DOM base XSS Prevention'
      },
      {
        link: `${owaspURL}/cheatsheets/Securing_Cascading_Style_Sheets_Cheat_Sheet.html`,
        name: 'Securing CSS'
      },
      {
        link: `${owaspURL}/cheatsheets/REST_Security_Cheat_Sheet.html`,
        name: 'REST Security'
      }
    ]
  }
];

export const galleryList = [
  {
    className: 'about-img night-gazer',
    category: 'nature',
    title: 'Stargazing',
    style: {
      backgroundImage: `url('https://res.cloudinary.com/paulkim/image/upload/v1552394093/images/misc/night-gazing-2.jpg')`
    }
  },
  {
    className: 'about-img standard-item',
    category: 'science',
    title: 'SciFi',
    style: {
      backgroundImage: `url('https://fsb.zobj.net/crop.php?r=hCMStlCSUomtKDZzdNz_TgVCZKr-L82WpR5-YdI01AWVcr9XsIxMnvPUn_U14Cihu216NkO0zO-uVI6BbFNmp8k-d_NBGEagN90olJwy7vYvsd3QX6niCL-fETao2wZgmHujKK2HMV-fYH15919nTFHzdm9-tmOhVHzk8yY2J0980kvtavpZludWUsg')`
    }
  },
  {
    className: 'about-img standard-item',
    category: 'music',
    title: 'Nujabes RIP',
    style: {
      backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79253b3f-be63-40cb-8f17-352e5796676e/d4bplcy-34a4924d-330d-4e2d-a4ce-067788f395c8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5MjUzYjNmLWJlNjMtNDBjYi04ZjE3LTM1MmU1Nzk2Njc2ZVwvZDRicGxjeS0zNGE0OTI0ZC0zMzBkLTRlMmQtYTRjZS0wNjc3ODhmMzk1YzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XvBt1oq1pWK3XPCiZ27A2oB3qv3UEOz2kcKqLW8hkdo')`
    }
  },
  {
    className: 'about-img standard-item',
    category: '',
    style: {
      backgroundImage: `url('http://i.imgur.com/aYk6D.jpg')`
    },
    title: 'Minecraft'
  },
  {
    className: 'about-img standard-item',
    category: 'animals',
    style: {
      backgroundImage: `url('https://img.staticbg.com/thumb/large/oaupload/banggood/images/61/6C/f0951167-bb41-4cfc-a822-8172e14e3caa.jpg')`
    },
    title: 'Cats'
  },
  {
    className: 'about-img standard-item',
    category: 'animals',
    style: {
      backgroundImage: `url('https://i.kym-cdn.com/photos/images/original/000/810/722/307.jpg')`
    },
    title: 'Dogs'
  }
];

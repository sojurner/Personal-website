import React from 'react';
import './GalleryDisplay.css';

const galleryList = [
  {
    className: 'about-img night-gazer',
    title: 'Star Gazing',
    style: {
      backgroundImage: `url('https://res.cloudinary.com/paulkim/image/upload/v1552394093/images/misc/night-gazing-2.jpg')`
    }
  },
  {
    className: 'about-img standard-item',
    title: 'Christopher Nolan',
    style: {
      backgroundImage: `url('https://fsb.zobj.net/crop.php?r=hCMStlCSUomtKDZzdNz_TgVCZKr-L82WpR5-YdI01AWVcr9XsIxMnvPUn_U14Cihu216NkO0zO-uVI6BbFNmp8k-d_NBGEagN90olJwy7vYvsd3QX6niCL-fETao2wZgmHujKK2HMV-fYH15919nTFHzdm9-tmOhVHzk8yY2J0980kvtavpZludWUsg')`
    }
  },
  {
    className: 'about-img standard-item',
    title: 'Nujabes RIP',
    style: {
      backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79253b3f-be63-40cb-8f17-352e5796676e/d4bplcy-34a4924d-330d-4e2d-a4ce-067788f395c8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5MjUzYjNmLWJlNjMtNDBjYi04ZjE3LTM1MmU1Nzk2Njc2ZVwvZDRicGxjeS0zNGE0OTI0ZC0zMzBkLTRlMmQtYTRjZS0wNjc3ODhmMzk1YzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XvBt1oq1pWK3XPCiZ27A2oB3qv3UEOz2kcKqLW8hkdo')`
    }
  },
  {
    className: 'about-img standard-item',
    style: {
      backgroundImage: `url('http://i.imgur.com/aYk6D.jpg')`
    },
    title: 'Minecraft'
  },
  {
    className: 'about-img standard-item',
    style: {
      backgroundImage: `url('https://img.staticbg.com/thumb/large/oaupload/banggood/images/61/6C/f0951167-bb41-4cfc-a822-8172e14e3caa.jpg')`
    },
    title: 'Minecraft'
  },
  {
    className: 'about-img standard-item',
    style: {
      backgroundImage: `url('https://i.kym-cdn.com/photos/images/original/000/810/722/307.jpg')`
    },
    title: 'Minecraft'
  }
];

const GalleryDisplay = () => {
  return (
    <div className="wrapper">
      {galleryList.map((imgProps, index) => (
        <div key={`about-img-${index}`} {...imgProps} />
      ))}
    </div>
  );
};

export default GalleryDisplay;

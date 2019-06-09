export default {
  'root-hide': `
    height: 100vh;
    width: 100vw;
    opacity: 0;
  `,
  'root-show': `
    overflow-Y: scroll;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-color: rgb(0, 117, 212);
    background-image: url('https://res.cloudinary.com/paulkim/image/upload/v1552394092/images/misc/night_sea.jpg');
    background-size: cover;
    background-blend-mode: multiply;
    opacity: 1;
    transition: 0.1s linear;  
  `
};

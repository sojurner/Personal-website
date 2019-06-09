import JumboMumbo from '../../components/JumboMumbo/JumboMumbo';
import Projects from '../../components/Projects/Projects';
import Resume from '../../components/Resume/Resume';
import About from '../../components/AboutPage/AboutPage';
import GalleryInfiniteScroll from '../../components/GalleryInfiniteScroll/GalleryInfiniteScroll';

export const mainRoutes = [
  {
    path: '/',
    component: JumboMumbo
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/about/:category',
    component: GalleryInfiniteScroll
  }
];

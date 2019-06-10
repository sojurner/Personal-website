import { lazy } from 'react';

export const mainRoutes = [
  {
    path: '/',
    component: lazy(() => import('../../components/JumboMumbo/JumboMumbo'))
  },
  {
    path: '/projects',
    component: lazy(() => import('../../components/Projects/Projects'))
  },
  {
    path: '/resume',
    component: lazy(() => import('../../components/Resume/Resume'))
  },
  {
    path: '/about',
    component: lazy(() => import('../../components/AboutPage/AboutPage'))
  },
  {
    path: '/about/:category',
    component: lazy(() =>
      import('../../components/GalleryInfiniteScroll/GalleryInfiniteScroll')
    )
  }
];

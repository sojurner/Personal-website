import { lazy } from 'react';

export const mainRoutes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../../components/JumboMumbo/JumboMumbo'))
  },
  {
    path: '/projects',

    component: lazy(() => import('../../components/Projects/Projects'))
  },
  {
    path: '/resume',
    exact: true,

    component: lazy(() => import('../../components/Resume/Resume'))
  },
  {
    path: '/about',
    exact: true,
    component: lazy(() => import('../../components/AboutPage/AboutPage'))
  },
  {
    path: '/about/:category',
    exact: true,
    component: lazy(() =>
      import('../../components/GalleryInfiniteScroll/GalleryInfiniteScroll')
    )
  }
];

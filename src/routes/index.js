import React from 'react';

import { ROUTES } from '@constants/routes';

const Home = React.lazy(() => import('@pages/Home'));
const NotFound = React.lazy(() => import('@pages/NotFound'));

export const commonRoutes = [
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: ROUTES.ROOT,
    element: <Home />,
  },
];

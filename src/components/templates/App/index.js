import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { Layout } from '@templates';
import { commonRoutes } from '@routes';

const App = () => {
  const element = useRoutes(commonRoutes);

  return (
    <Layout>
      <Suspense fallback={<CircularProgress />}>{element}</Suspense>
    </Layout>
  );
};

export default App;

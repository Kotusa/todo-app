import { Container, Typography } from '@mui/material';
import React from 'react';

import { Title } from '@atoms';

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Title $center>Not Found</Title>
    </Container>
  );
};

export default NotFound;

import React from 'react';

import { ContainerWrapper } from './styles';

const Container = ({ children, ...rest }) => {
  return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
};

export default Container;

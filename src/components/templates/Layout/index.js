import React, { Fragment } from 'react';

import { Header, MenuDrawer } from '@organisms';

import { GlobalStyles, LayoutContainer } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <Header title="To Do" />
      {children}
      <MenuDrawer />
    </LayoutContainer>
  );
};

export default Layout;

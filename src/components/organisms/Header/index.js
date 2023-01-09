import React, { useContext } from 'react';
import cn from 'classnames';

import { ROUTES } from '@constants/routes';
import { Button, Container, Icon } from '@atoms';
import { ApplicationContext } from '@context';

import { HeaderContainer, HeaderTitle } from './styles';

const Header = ({ title }) => {
  const { toggleDrawerVisibility } = useContext(ApplicationContext);

  const handleButtonClick = () => {
    toggleDrawerVisibility(true);
  };

  return (
    <Container maxWidth="sm" $padding="37">
      <HeaderContainer>
        <HeaderTitle to={ROUTES.ROOT}>{title}</HeaderTitle>
        <Button onClick={handleButtonClick} className={cn('invisible')}>
          <Icon name="settings" className={cn('settings-icon')} />
        </Button>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

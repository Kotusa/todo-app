import React from 'react';
import cn from 'classnames';

import { Button, Icon } from '@atoms';

import { DrawerContainer, DrawerHead, DrawerTitle } from './styles';

const Drawer = ({ title, children, onClose, ...rest }) => {
  return (
    <DrawerContainer onClose={onClose} PaperProps={{ className: cn('drawer-body') }} {...rest}>
      {title && (
        <DrawerHead>
          <DrawerTitle>{title}</DrawerTitle>
          <Button className={cn('invisible')} onClick={onClose}>
            <Icon name="close" className={cn('close-icon')} />
          </Button>
        </DrawerHead>
      )}
      {children}
    </DrawerContainer>
  );
};

export default Drawer;

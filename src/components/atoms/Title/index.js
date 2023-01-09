import React, { memo } from 'react';

import { TitleContainer } from './styles';

const Title = memo(({ children, icon, ...rest }) => {
  return (
    <TitleContainer $icon={icon} {...rest}>
      {icon && icon}
      {children}
    </TitleContainer>
  );
});

export default Title;

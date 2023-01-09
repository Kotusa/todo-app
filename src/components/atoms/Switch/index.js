import React, { memo } from 'react';

import { SwitchContainer } from './styles';

const Switch = memo(({ ...rest }) => {
  return <SwitchContainer focusVisibleClassName=".Mui-focusVisible" {...rest} />;
});

export default Switch;

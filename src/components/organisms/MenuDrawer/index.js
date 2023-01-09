import React, { useContext } from 'react';
import { FormControlLabel } from '@mui/material';

import { Switch } from '@atoms';
import { Drawer } from '@molecules';
import { ApplicationContext, NewsContext } from '@context';

const MenuDrawer = () => {
  const { drawerVisibility, toggleDrawerVisibility } = useContext(ApplicationContext);
  const { newsVisibility, toggleNewsVisibility } = useContext(NewsContext);

  const hideNews = (event) => {
    toggleNewsVisibility(event.target.checked);
  };

  return (
    <Drawer title="Settings" anchor="right" open={drawerVisibility} onClose={() => toggleDrawerVisibility(false)}>
      <FormControlLabel
        control={
          <Switch $mr="10" checked={newsVisibility} onChange={hideNews} inputProps={{ 'aria-label': 'controlled' }} />
        }
        label="Show News"
      />
    </Drawer>
  );
};

export default MenuDrawer;

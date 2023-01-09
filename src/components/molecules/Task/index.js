import React from 'react';
import { FormControlLabel } from '@mui/material';

import { Switch } from '@atoms';

import { TaskContainer, TaskContent, TaskDescription, TaskTitle } from './styles';

const Task = ({ data, handleDoneChange, ...rest }) => {
  const { title, description, done, color } = data;

  return (
    <TaskContainer {...rest}>
      <TaskContent $color={color}>
        <TaskTitle $done={done}>{title}</TaskTitle>
        <TaskDescription title={description}>{description}</TaskDescription>
      </TaskContent>
      <FormControlLabel
        control={<Switch onChange={handleDoneChange} checked={done} inputProps={{ 'aria-label': 'controlled' }} />}
      />
    </TaskContainer>
  );
};

export default Task;

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { COLOR } from '@constants/todos';
import { Button } from '@atoms';
import { Form } from '@molecules';

const TodoForm = ({ onSubmit, handleCancel }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  const cancelForm = () => {
    handleCancel();
    reset();
  };

  const submitForm = (values) => {
    onSubmit(values);
    handleCancel();
    reset();
  };

  return (
    <Form $background onSubmit={handleSubmit(submitForm)}>
      <Form.Item>
        <TextField label="Title" {...register('title', { required: true })} />
        {errors.title && <Form.Error>This field is required</Form.Error>}
      </Form.Item>

      <Form.Item>
        <TextField label="Description" {...register('description', { required: true })} />
        {errors.description && <Form.Error>This field is required</Form.Error>}
      </Form.Item>

      <Form.Item>
        <Controller
          control={control}
          defaultValue={date}
          name="date"
          render={({ field: { onChange, ...restFields } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                {...restFields}
                label="Date"
                inputFormat="YYYY-MM-DD"
                value={date}
                onChange={(value) => {
                  onChange(dayjs(value).format('YYYY-MM-DD'));
                  setDate(dayjs(value).format('YYYY-MM-DD'));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          )}
        />
      </Form.Item>

      <Form.Item>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select label="Color" defaultValue={COLOR.RED} {...register('color', { required: true })}>
            <MenuItem value={COLOR.RED}>Red</MenuItem>
            <MenuItem value={COLOR.BLUE}>Blue</MenuItem>
            <MenuItem value={COLOR.YELLOW}>Yellow</MenuItem>
          </Select>
        </FormControl>
      </Form.Item>

      <Form.Row $gap="15">
        <Button type="submit">Submit</Button>
        <Button onClick={cancelForm}>Cancel</Button>
      </Form.Row>
    </Form>
  );
};

export default TodoForm;

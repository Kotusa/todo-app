import React from 'react';

import { FormContainer, FormError, FormItem, FormRow } from './styles';

const Form = ({ children, ...rest }) => {
  return <FormContainer {...rest}>{children}</FormContainer>;
};

Form.Item = FormItem;
Form.Row = FormRow;
Form.Error = FormError;

export default Form;

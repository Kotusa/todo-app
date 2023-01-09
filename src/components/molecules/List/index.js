import React from 'react';

import { ListContainer, ListItem } from './styles';

const List = ({ children, ...rest }) => {
  return <ListContainer {...rest}>{children}</ListContainer>;
};

List.Item = ListItem;

export default List;

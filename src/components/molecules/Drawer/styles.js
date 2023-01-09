import { Drawer } from '@mui/material';
import styled from 'styled-components';

export const DrawerContainer = styled(Drawer)`
  .drawer-body {
    min-width: 250px;
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.body};
    color: ${({ theme }) => theme.palette.text};
  }
`;

export const DrawerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const DrawerTitle = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.palette.text};
  font-size: 26px;
`;

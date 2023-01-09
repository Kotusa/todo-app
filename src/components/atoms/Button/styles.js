import { Button } from '@mui/material';
import styled, { css } from 'styled-components';

export const ButtonContainer = styled(Button)`
  &.button {
    font-size: 18px;
    background-color: ${({ theme }) => theme.palette.button};
    color: ${({ theme }) => theme.palette.text};
    &:hover {
      background-color: ${({ theme }) => theme.palette.buttonHover};
    }
  }

  &.invisible {
    background-color: transparent;
    padding: 0;
    min-width: auto;
    &:hover {
      background-color: transparent;
    }
  }
`;

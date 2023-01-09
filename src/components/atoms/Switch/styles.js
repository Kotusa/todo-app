import { Switch } from '@mui/material';
import styled, { css } from 'styled-components';

import crossIcon from '@assets/icons/cross-1.svg';
import checkedIcon from '@assets/icons/checked-1.svg';

export const SwitchContainer = styled(Switch)`
  width: 49px !important;
  height: 29px !important;
  padding: 0 !important;

  & .MuiSwitch-switchBase {
    padding: 0;
    margin: 2px;

    &.Mui-checked {
      transform: translateX(19px);
      color: #fff;

      & + .MuiSwitch-track {
        background-color: #10c200;
        opacity: 1;
        border: 0;
      }
      & .MuiSwitch-thumb {
        &::before {
          background-image: url(${checkedIcon});
        }
      }
      &.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
      }
    }
    &.Mui-focusVisible .MuiSwitch-thumb {
      color: #33cf4d;
      border: 6px solid #fff;
    }
    &.Mui-disabled .MuiSwitch-thumb {
      color: #aaa;
    }
    &.Mui-disabled + .MuiSwitch-track {
      opacity: 0.7;
    }
  }
  & .MuiSwitch-thumb {
    box-sizing: border-box;
    width: 25px;
    height: 25px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 13px;
      height: 13px;
      background-image: url(${crossIcon});
    }
  }
  & .MuiSwitch-track {
    border-radius: 13px;
    background-color: #366eff;
    opacity: 1;
  }

  ${({ $mr }) =>
    $mr &&
    css`
      margin-right: ${$mr}px;
    `}
`;

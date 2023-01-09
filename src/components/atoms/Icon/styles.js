import styled, { css } from 'styled-components';

export const SvgContainer = styled.svg`
  width: 50px;
  height: 50px;

  &.checked-icon {
    width: 23px;
    height: 23px;
  }

  &.settings-icon {
    width: 28px;
    height: 30px;
  }

  &.close-icon {
    width: 30px;
    height: 30px;
    stroke: ${({ theme }) => theme.palette.text};
  }
`;

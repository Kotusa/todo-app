import { Container } from '@mui/material';
import styled, { css } from 'styled-components';

export const ContainerWrapper = styled(Container)`
  ${({ $padding }) =>
    $padding &&
    css`
      padding-left: ${$padding}px !important;
      padding-right: ${$padding}px !important;
    `}
`;

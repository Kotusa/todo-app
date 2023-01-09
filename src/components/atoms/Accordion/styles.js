import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import styled from 'styled-components';

export const AccordionContainer = styled(Accordion)`
  background-color: ${({ theme }) => theme.palette.taskBackground} !important;
  box-shadow: 16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05) !important;
  border-radius: 40px !important;

  .MuiCollapse-root {
    padding: 0 10px 0 20px !important;
  }
`;

export const AccordionSummaryContainer = styled(AccordionSummary)`
  &.MuiAccordionSummary-root {
    padding: 0 36px;
  }
  .MuiAccordionSummary-content {
    color: ${({ theme }) => theme.palette.text};
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    margin: 25px 0;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      width: 5px;
      height: 40px;
      background-color: ${({ theme }) => theme.palette.secondaryText};
      border-radius: 3px;
    }
  }
  .icon {
    width: 21px;
    height: 21px;
  }
`;

export const AccorsionDetailsContainer = styled(AccordionDetails)``;

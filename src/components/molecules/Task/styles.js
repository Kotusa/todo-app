import styled, { css } from 'styled-components';

import { COLOR } from '@constants/todos';

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    width: 5px;
    height: 40px;
    border-radius: 3px;
    background-color: #fff;
  }

  ${({ $color }) => {
    switch ($color) {
      case COLOR.RED:
        return css`
          &::before {
            background-color: ${({ theme }) => theme.palette.taskRedColor};
          }
        `;

      case COLOR.BLUE:
        return css`
          &::before {
            background-color: ${({ theme }) => theme.palette.taskBlueColor};
          }
        `;

      default:
        return css`
          &::before {
            background-color: ${({ theme }) => theme.palette.taskYellowColor};
          }
        `;
    }
  }}
`;

export const TaskTitle = styled.span`
  display: inline-block;
  margin-bottom: 3px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text};

  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const TaskDescription = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.palette.secondaryText};
  width: 100%;
  max-width: 170px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

import styled, { css } from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;

  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap}px;
    `}

  ${({ $secondary }) =>
    $secondary &&
    css`
      background-color: ${({ theme }) => theme.palette.taskBackground};
      box-shadow: 16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05);
      border-radius: 40px;
      padding: 16px 25px 18px 36px;
    `}
`;

export const ListItem = styled.li``;

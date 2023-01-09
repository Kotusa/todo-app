import styled, { css } from 'styled-components';

export const TodosContainer = styled.div`
  margin-bottom: 70px;
`;

export const TodosBlock = styled.div`
  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: ${$mb}px;
    `}
`;

export const TodosHead = styled.div`
  padding-left: 15px;
`;

export const TodosText = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.palette.text};
`;

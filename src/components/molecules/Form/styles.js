import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  padding-top: 30px;

  ${({ $background }) =>
    $background &&
    css`
      background-color: ${({ theme }) => theme.palette.taskBackground};
      box-shadow: 16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05);
      border-radius: 40px;
      padding: 40px 30px;
    `}
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;

  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap}px;
    `}
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const FormError = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.palette.error};
`;

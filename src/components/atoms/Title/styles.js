import styled, { css } from 'styled-components';

export const TitleContainer = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text};

  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: ${$mb}px;
    `}

  ${({ $icon }) =>
    $icon &&
    css`
      gap: 10px;
    `}

  ${({ $small }) =>
    $small &&
    css`
      font-size: 24px;
      line-height: 28px;
    `}

  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}
`;

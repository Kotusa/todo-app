import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary}, Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.palette.body};
    color: ${({ theme }) => theme.palette.text};

    &::-webkit-scrollbar {
      width: 0rem;
      height: 0rem;
    }
  }

  #root {
    height: 100%;
  }

  .MuiFormControlLabel-root {
    margin: 0 !important;
  }

  .MuiContainer-root.height {
    flex: 100%;
  }
  
  .MuiCalendarOrClockPicker-root {
    color: ${({ theme }) => theme.palette.text};
    background: ${({ theme }) => theme.palette.taskBackground};

    .MuiSvgIcon-root {
      fill: ${({ theme }) => theme.palette.text}
    }

    .MuiTypography-root {
      color: ${({ theme }) => theme.palette.text};
    }

    .MuiButtonBase-root {
      background: ${({ theme }) => theme.palette.taskBackground};
      color: ${({ theme }) => theme.palette.text};
    }
  }

  .MuiFormControl-root {
    .MuiInputLabel-root {
      font-size: 20px;
      color: ${({ theme }) => theme.palette.secondaryText} !important;
    }

    .MuiInputBase-root {
      &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border-color: ${({ theme }) => theme.palette.secondaryText};
        }
      }
      &:hover {
        .MuiOutlinedInput-notchedOutline {
          border-color: ${({ theme }) => theme.palette.secondaryText};
        }
      }
    }

    .MuiInputBase-input {
      font-size: 20px;
      color: ${({ theme }) => theme.palette.text};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.palette.secondaryText};
      legend {
        height: 14px;
      }
    }

    .MuiSvgIcon-root {
      fill: ${({ theme }) => theme.palette.secondaryText};
    }
  }

  .MuiPaper-root {
    background: ${({ theme }) => theme.palette.taskBackground} !important;
  }

  .MuiList-root {
    color: ${({ theme }) => theme.palette.text};
    background: ${({ theme }) => theme.palette.taskBackground};
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

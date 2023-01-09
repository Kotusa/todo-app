import styled from 'styled-components';

export const MarqueeContent = styled.div`
  display: inline-flex;
  height: 60px;

  white-space: nowrap;
  padding-right: 100%;

  box-sizing: content-box;

  gap: 40px;

  animation: marquee 25s linear infinite;

  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`;

export const MarqueeContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.body};

  padding-left: 100%;
  box-sizing: content-box;

  z-index: 50;

  &:hover {
    ${MarqueeContent} {
      animation-play-state: paused;
    }
  }
`;

export const MarqueeRow = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const MarqueeText = styled.span`
  font-size: 16px;
  line-height: 20px;

  opacity: 0.5;
`;

export const MarqueeLink = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.text};

  margin-left: 5px;

  &:hover {
    text-decoration: none;
  }
`;

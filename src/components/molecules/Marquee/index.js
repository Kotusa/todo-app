import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MarqueeContainer, MarqueeContent, MarqueeLink, MarqueeRow, MarqueeText } from './styles';

const Marquee = ({ source }) => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        {source?.map((content) => (
          <MarqueeRow key={uuidv4()}>
            <MarqueeText>{content?.description}</MarqueeText>

            <MarqueeLink href={content?.url} target="_blank" rel="noopener noreferrer">
              Read more
            </MarqueeLink>
          </MarqueeRow>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;

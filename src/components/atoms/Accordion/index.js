import React, { memo } from 'react';
import cn from 'classnames';

import { AccordionContainer, AccordionSummaryContainer, AccorsionDetailsContainer } from './styles';

const Accordion = memo(({ children, ...rest }) => {
  return (
    <AccordionContainer className={cn('accordion')} {...rest}>
      {children}
    </AccordionContainer>
  );
});

Accordion.Summary = AccordionSummaryContainer;
Accordion.Details = AccorsionDetailsContainer;

export default Accordion;

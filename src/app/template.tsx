"use client"

import { TemplateContainer, CardsContainer, LeftColumn, RightColumn } from './Template.styles';
import { CBack, CFront } from './components';

export default function template({ children }: { children: React.ReactNode }) {
	return (
		<TemplateContainer>
      <LeftColumn>
        <CardsContainer>
          <CFront />
          <CBack />
        </CardsContainer>
      </LeftColumn>
      <RightColumn>
				{children}
        Thank you!
        We&apos;ve added your card details
        Continue
      </RightColumn>
    </TemplateContainer>
	)
}

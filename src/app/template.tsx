"use client"

import { TemplateContainer, CardsContainer, LeftColumn, RightColumn, LeftColumnImage } from './Template.styles';

import { CBack, CFront } from './components';

export default function template({ children }: { children: React.ReactNode }) {
	return (
    <TemplateContainer>
      <LeftColumn>
        <LeftColumnImage />
        <CardsContainer>
          <CFront />
          <CBack />
        </CardsContainer>
      </LeftColumn>
      <RightColumn>
        {children}
      </RightColumn>
    </TemplateContainer>
	)
}

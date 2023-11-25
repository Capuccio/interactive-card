"use client"

import CardProvider from '@/context/CardContext';
import { TemplateContainer, CardsContainer, LeftColumn, RightColumn } from './Template.styles';

import { CBack, CFront } from './components';

export default function template({ children }: { children: React.ReactNode }) {
	return (
    <CardProvider>
      <TemplateContainer>
        <LeftColumn>
          <CardsContainer>
            <CFront />
            <CBack />
          </CardsContainer>
        </LeftColumn>
        <RightColumn>
          {children}
        </RightColumn>
      </TemplateContainer>
    </CardProvider>
	)
}

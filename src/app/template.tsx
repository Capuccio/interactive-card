"use client"

import { TemplateContainer, CardsContainer, LeftColumn, RightColumn, LeftColumnImage } from './Template.styles';

import Front from './components/Card/Front';
import Back from './components/Card/Back';

export default function template({ children }: { children: React.ReactNode }) {
	return (
    <TemplateContainer>
      <LeftColumn>
        {/**
        <LeftColumnImage />
        */}
        <CardsContainer>
          <Front />
          <Back />
        </CardsContainer>
      </LeftColumn>
      <RightColumn>
        {children}
      </RightColumn>
    </TemplateContainer>
	)
}

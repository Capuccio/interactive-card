"use client"

import { CBack, CFront, CForm } from "./components";

import { CardsContainer, HomeContainer, LeftColumn, RightColumn } from "./Home.styles";

export default function Home() {
  return (
    <HomeContainer>
      <LeftColumn />
      <RightColumn>
        <CardsContainer>
          <CFront />
          <CBack />
        </CardsContainer>
        <CForm />
        000
        Completed state start
        Thank you!
        We've added your card details
        Continue
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </RightColumn>
    </HomeContainer>
  )
}

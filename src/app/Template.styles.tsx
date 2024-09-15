import styled from 'styled-components'

export const TemplateContainer = styled.main`
  width: 100vw;
	height: 100%;
	display: flex;
  flex-direction: column;

	@media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
	}
`

export const LeftColumn = styled.section`
	display: flex;
	flex-direction: column;

  @media (min-width: 1024px) {
    justify-content: center;
	}
`

export const LeftColumnImage = styled.div`
  background-image: url('/bg-main-mobile.png');
	background-size: 100%;
	height: 240px;
	width: 100%;

	@media (min-width: 1024px) {
    background-image: url('/bg-main-desktop.png');
    background-repeat: no-repeat;
    height: 100%;
    width: 483px;
	}
`

export const RightColumn = styled.section`
	justify-content: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

	@media (min-width: 1024px) {
	}
`

export const CardsContainer = styled.div`
  padding-top: 1.2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  width: fit-content;
  margin: 0 auto;
  flex-direction: column-reverse;

	@media (min-width: 1024px) {
    align-items: start;
    flex-direction: column;
    gap: 20px;
    padding-top: 0;
    user-select: none;
    margin-left: 10rem;
	}
`

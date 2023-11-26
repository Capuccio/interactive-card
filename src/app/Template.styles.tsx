import styled from 'styled-components'

export const TemplateContainer = styled.main`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`

export const LeftColumn = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 1024px) {
		display: block;
	}
`

export const LeftColumnImage = styled.div`
	background-image: url('/bg-main-desktop.png');
	background-repeat: no-repeat;
	height: 100%;
	width: 483px;

	@media (max-width: 1024px) {
		background-image: url('/bg-main-mobile.png');
		background-size: 100%;
		height: 240px;
		width: 100%;
	}
`

export const RightColumn = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 1024px) {
		justify-content: start;
	}
`

export const CardsContainer = styled.div`
	position: absolute;
	top: auto;
	left: 180px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	user-select: none;

	@media (max-width: 1024px) {
		top: 3vh;
		left: 0;
		gap: 0;
		width: 100%;
		align-items: center;
		flex-direction: column-reverse;
	}
`
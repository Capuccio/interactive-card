import styled from 'styled-components'

export const HomeContainer = styled.main`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 483px 1fr;
`

export const LeftColumn = styled.section`
	background-image: url('/bg-main-desktop.png');
	background-repeat: no-repeat;
	height: 100%;
`

export const RightColumn = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const CardsContainer = styled.div`
	position: absolute;
	top: auto;
	left: 180px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`
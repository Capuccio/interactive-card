import styled from 'styled-components'

export const TemplateContainer = styled.main`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`

export const LeftColumn = styled.section`
	background-image: url('/bg-main-desktop.png');
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
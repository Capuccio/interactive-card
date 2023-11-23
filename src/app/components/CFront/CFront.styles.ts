import styled from 'styled-components';

export const CFrontContainer = styled.div`
	background-image: url('/bg-card-front.png');
	width: 447px;
	height: 245px;
	display: flex;
	flex-direction: column;
	position: relative;
`

export const CFrontTop = styled.div`
	padding: 30px;
`

export const CFrontBottom = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 0 30px 26px;
	bottom: 0px;
	color: hsl(0, 0%, 100%);
`

export const CFrontBottomNumbersContainer = styled.div`
	display: flex;
	gap: 9px;
	font-size: 1.82rem;
`

export const CFrontBottomNumbers = styled.span`
	letter-spacing: 0.20rem;
`

export const CFrontBottomInfo = styled.div`
	display: flex;
	justify-content: space-between;
	letter-spacing: 2px;
	font-size: 12px;
`

export const CFrontBottomName = styled.span`
	text-transform: uppercase;
`
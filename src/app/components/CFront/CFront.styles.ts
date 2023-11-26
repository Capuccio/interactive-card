import Image from "next/image";
import styled from 'styled-components';

export const CFrontContainer = styled.div`
	position: relative;
	background-image: url('/bg-card-front.png');
	background-repeat: no-repeat;
	background-size: 100%;
	width: 447px;
	height: 245px;
	display: flex;
	flex-direction: column;

	@media (max-width: 1024px) {
		width: 280px;
		height: 154px;
		z-index: 1;
		margin-right: 50px;
	}
`

export const CFrontTop = styled.div`
	padding: 30px;

	@media (max-width: 1024px) {
		padding: 15px;
	}
`

export const CardLogo = styled(Image)`
	width: 72px;
	height: 42px;

	@media (max-width: 1024px) {
		width: 48px;
		height: 26px;
	}
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

	@media (max-width: 1024px) {
		padding: 0 15px 18px;
		gap: 18px;
	}
`

export const CFrontBottomNumbersContainer = styled.div`
	font-size: 1.82rem;
	@media (max-width: 1024px) {
		font-size: 0.888rem;
	}
`

export const CFrontBottomNumbers = styled.span`
	letter-spacing: 0.20rem;
`

export const CFrontBottomInfo = styled.div`
	display: flex;
	justify-content: space-between;
	letter-spacing: 2px;
	font-size: 0.75rem;
	@media (max-width: 1024px) {
		font-size: 0.45rem;
	}
`

export const CFrontBottomName = styled.span`
	text-transform: uppercase;
`
import Image from "next/image";
import styled from 'styled-components';

export const CFrontContainer = styled.div`
	position: relative;
	background-image: url('/bg-card-front.png');
	background-size: cover;
	display: flex;
	flex-direction: column;
  width: 280px;
	height: 154px;
	z-index: 1;
  margin-top: -4.2rem;
  box-shadow: rgba(17, 12, 46, .2) 0px 20px 60px 0;
  border-radius: 10px;

	@media (min-width: 1024px) {
    width: 437px;
    height: 235px;
    margin-top: 0;
    margin-left: -2.5rem;
    box-shadow: none;
	}
`

export const CFrontTop = styled.div`
	padding: 30px;

	@media (max-width: 1024px) {
		padding: 15px;
	}
`

export const CardLogo = styled(Image)`
  width: 48px;
	height: 26px;

	@media (min-width: 1024px) {
    width: 72px;
    height: 42px;
	}
`

export const CFrontBottom = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: column;
	bottom: 0px;
	color: var(--white);
  padding: 0 15px 18px;
	gap: 18px;

	@media (min-width: 1024px) {
    gap: 30px;
    padding: 0 30px 26px;
	}
`

export const CFrontBottomNumbersContainer = styled.div`
	font-size: 1.03rem;
	@media (min-width: 1024px) {
	  font-size: 1.75rem;
	}
`

export const CFrontBottomNumbers = styled.span`
	letter-spacing: 0.20rem;
`

export const CFrontBottomInfo = styled.div`
	display: flex;
	justify-content: space-between;
	letter-spacing: 2px;
	font-size: 0.60rem;

	@media (max-width: 1024px) {
    font-size: 0.75rem;
	}
`

export const CFrontBottomName = styled.span`
	text-transform: uppercase;
`

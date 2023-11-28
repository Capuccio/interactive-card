import styled from "styled-components";

export const CBackContainer = styled.div`
	position: relative;
	background-image: url("/bg-card-back.png");
	background-repeat: no-repeat;
	background-size: 100%;
	width: 447px;
	height: 245px;
	margin-left: 90px;

	@media (max-width: 1024px) {
		width: 280px;
		height: 154px;
		margin-left: 50px;
		margin-bottom: -4.171rem;
	}
`

export const CBackCvc = styled.p`
	position: absolute;
	color: var(--white);
	right: 60px;
	top: 50%;
	transform: translateY(-60%);
	letter-spacing: 0.125rem;

	@media (max-width: 1024px) {
		font-size: 0.60rem;
		right: 32px;
	}
`
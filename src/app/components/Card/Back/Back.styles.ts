import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	background-image: url("/bg-card-back.png");
	background-size: cover;
	width: 280px;
	height: 154px;
  border-radius: 10px;
	margin-left: 3.1rem;

	@media (min-width: 1024px) {
    width: 437px;
    height: 235px;
		margin-left: 2rem;
	}
`

export const CVC = styled.p`
	position: absolute;
	color: var(--white);
	top: 50%;
	transform: translateY(-60%);
	letter-spacing: 0.125rem;
  font-size: 0.60rem;
	right: 32px;

	@media (min-width: 1024px) {
    font-size: 1rem;
    right: 50px;
	}
`

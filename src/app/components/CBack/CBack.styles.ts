import styled from "styled-components";

export const CBackContainer = styled.div`
	position: relative;
	background-image: url("/bg-card-back.png");
	width: 447px;
	height: 245px;
	margin-left: 90px;
`

export const CBackCvc = styled.p`
	position: absolute;
	right: 60px;
	top: 50%;
	transform: translateY(-60%);
	letter-spacing: 0.125rem;
`
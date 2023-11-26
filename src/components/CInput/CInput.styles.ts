import styled from 'styled-components';

export const CInputStyled = styled.input<{ $message?: string; }>`
	font-family: inherit;
	border-color: ${props => props.$message && props.$message.length > 0 ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)' };
	border-width: 1.5px;
	border-style: solid;
	padding: 0.65rem;
	width: 100%;
	border-radius: 8px;
	background-color: transparent;
	position: relative;
	letter-spacing: 0.05rem;

	&:focus {
		outline: none;
		border-color: hsl(249, 99%, 64%) #6929c7 hsl(278, 94%, 30%);
 	}
`

export const CInputError = styled.span`
	font-size: 0.6rem;
	color: hsl(0, 100%, 66%);
`
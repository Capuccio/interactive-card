import styled from 'styled-components';

export const CInputStyled = styled.input<{ $message?: string; }>`
	font-family: inherit;
	border-color: ${props => props.$message && props.$message.length > 0 ? 'var(--error-input)' : 'var(--light-grayish-violet)' };
	border-width: 1.5px;
	border-style: solid;
	padding: 0.75rem;
	width: 100%;
	border-radius: 8px;
	background-color: transparent;
	position: relative;
	letter-spacing: 0.05rem;

	&:focus {
		outline: none;
		border-color: var(--active-input-top) var(--active-input-mid) var(--active-input-bottom);
 	}
`

export const CInputError = styled.span`
	font-size: 0.7rem;
	color: var(--error-input);
`

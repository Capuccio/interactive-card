import styled from 'styled-components';

export const SucessContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 35px;
`

export const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	& > p {
		font-size: 1.6rem;
		letter-spacing: 2px;
	}

	& > span {
		color: hsl(279, 6%, 55%);
	}
`
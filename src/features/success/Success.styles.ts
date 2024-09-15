import styled from 'styled-components';

export const SucessContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  margin: 0 auto;
  width: 90%;
	gap: 35px;

  @media (min-width: 1024px) {
    width: 24rem;
  }
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
		color: var(--dark-grayish-violet);
	}
`

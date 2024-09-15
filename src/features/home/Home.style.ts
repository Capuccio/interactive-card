import styled from "styled-components";

export const CFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
  margin: 0 auto;
  width: min(90%, 24rem);

	@media (min-width: 1024px) {
    gap: 20px;
  }
`

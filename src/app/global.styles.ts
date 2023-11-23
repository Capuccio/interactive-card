"use client"
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html,
	body {
		max-width: 100vw;
		overflow-x: hidden;
  	margin: 0;
  	padding: 0;
		height: 100%;
}

	input, label {
		display: block;
	}
`
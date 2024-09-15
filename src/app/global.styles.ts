"use client"
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
		--white: hsl(0, 0%, 100%);
		--light-grayish-violet: hsl(270, 3%, 87%);
		--dark-grayish-violet: hsl(279, 6%, 55%);
		--very-dark-violet: hsl(278, 68%, 11%);
		--active-input-top: hsl(249, 99%, 64%);
		--active-input-mid: hsl(264, 66%, 47%);
		--active-input-bottom: hsl(278, 94%, 30%);
		--error-input: hsl(0, 100%, 66%);
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html,
	body {
		max-width: 100vw;
		height: 100%;
  	margin: 0;
  	padding: 0;
  }

  body::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/bg-main-mobile.png');
    background-size: cover;
    height: 13.5rem;
    width: 100%;
    z-index: -1;

    @media (min-width: 1024px) {
      background-image: url('/bg-main-desktop.png');
      height: 100%;
      width: 27rem;
    }
  }

	input, label {
		display: block;
	}
`

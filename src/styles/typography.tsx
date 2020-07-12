import Head from 'next/head';
import React, { memo, useState, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import { linkStyles } from '../components/typography/paragraphs';
import { foregroundColor } from '../theme/variables/colors';
import {
	h1Styles,
	h2Styles,
	h3Styles,
	h4Styles,
	h5Styles,
	h6Styles,
} from '../components/typography/headings';

/*
	 1. Preemptively warm up the fonts’ origin.

   2. Initiate a high-priority, asynchronous fetch for the CSS file. Works in
      most modern browsers.

   3. Initiate a low-priority, asynchronous fetch that gets applied to the page
      only after it’s arrived. Works in all browsers with JavaScript enabled.

   4. In the unlikely event that a visitor has intentionally disabled
      JavaScript, fall back to the original method. The good news is that,
      although this is a render-blocking request, it can still make use of the
      preconnect which makes it marginally faster than the default.
*/
export const GoogleFont = memo(() => {
	const [media, setMedia] = useState('print');
	const swapFont = useCallback(() => setMedia('all'), [setMedia]);
	const cssUrl =
		'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Montserrat';

	return (
		<>
			<link
				rel={`preconnect`}
				href={`https://fonts.gstatic.com`}
				crossOrigin={`crossorigin`}
			/>

			<link
				rel={`preload`}
				as={`style`}
				href={`${cssUrl}&display=swap`}
			/>

			<link
				rel={`stylesheet`}
				href={`${cssUrl}&display=swap`}
				media={media}
				onLoad={swapFont}
			/>

			<noscript>
				<link rel={`stylesheet`} href={`${cssUrl}&display=swap`} />
			</noscript>
		</>
	);
});

export const TypographyStyles = createGlobalStyle`
	body {
		color: ${foregroundColor};
		font-family: 'Montserrat', sans-serif;
    font-weight: 400;
		font-style: normal;
		line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums
	}

	a {
		${linkStyles}
	}

	h1 {
		${h1Styles}
	}

	h2 {
		${h2Styles}
	}

	h3 {
		${h3Styles}
	}

	h4 {
		${h4Styles}
	}

	h5 {
		${h5Styles}
	}

	h6 {
		${h6Styles}
	}
`;

export const Typography = memo(() => (
	<>
		<Head>
			<GoogleFont />
		</Head>

		<TypographyStyles />
	</>
));

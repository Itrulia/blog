import { css } from 'styled-components';

const createMediaQuery = (minSize: number, maxSize?: number) => (
	strings,
	...interpolations
) => {
	if (maxSize) {
		return css`
			@media (min-width: ${minSize / 16}em) and (max-width: ${maxSize /
				16}em) {
				${css(strings, ...interpolations)};
			}
		`;
	}

	return css`
		@media (min-width: ${minSize / 16}em) {
			${css(strings, ...interpolations)};
		}
	`;
};

export const DESKTOP_XL = 1920;
export const DESKTOP_HD = 1440;
export const DESKTOP = 1000;
export const TABLET = 768;
export const MOBILE = 0;

export const mobileOnly = createMediaQuery(MOBILE, TABLET - 1);
export const tabletOnly = createMediaQuery(TABLET, DESKTOP - 1);
export const desktopOnly = createMediaQuery(DESKTOP, DESKTOP_HD - 1);
export const desktopHDOnly = createMediaQuery(DESKTOP_HD, DESKTOP_XL - 1);

export const mobile = createMediaQuery(MOBILE);
export const tablet = createMediaQuery(TABLET);
export const desktop = createMediaQuery(DESKTOP);
export const desktopHD = createMediaQuery(DESKTOP_HD);
export const desktopXL = createMediaQuery(DESKTOP_XL);

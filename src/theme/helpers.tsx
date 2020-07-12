import { DefaultTheme } from 'styled-components';

export interface PropsWithTheme {
	theme: DefaultTheme;
}

export type themeFunction = (props: PropsWithTheme) => string;

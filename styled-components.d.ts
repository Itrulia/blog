import 'styled-components';

declare module 'styled-components' {
	export interface ModeValues<T> {
		light: T;
	}
	export type ThemeMode = keyof ModeValues<any>;
	export interface HasMode {
		mode: ThemeMode;
	}

	export interface DefaultTheme extends HasMode {
		colors: {
			primaryHue: number;
		};
	}
}

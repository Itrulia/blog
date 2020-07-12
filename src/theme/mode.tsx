import styledTheme from 'styled-theming';
import { themeFunction } from './helpers';
import { HasMode, ModeValues } from 'styled-components';

export const createMode = (key: keyof HasMode) => (
	obj: ModeValues<string | number | themeFunction>,
) => styledTheme(key, obj);

export const themeMode = createMode('mode');

import { pageBackgroundColor } from '../theme/variables/colors';
import { createGlobalStyle } from 'styled-components';

export const Body = createGlobalStyle`
	body {
		background-color: ${pageBackgroundColor};
	}
`;

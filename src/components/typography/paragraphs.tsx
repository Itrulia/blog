import styled from 'styled-components';
import { linkForegroundColor } from '../../theme/variables/colors';
import { css } from 'styled-components';

export const Paragraph = styled.p`
	margin-top: 0;
`;

export const Blockquote = styled.blockquote``;

// Anchors
export const linkStyles = css`
	color: ${linkForegroundColor};
`;

export const Link = styled.a`
	${linkStyles}
`;

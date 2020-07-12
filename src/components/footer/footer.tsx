import styled from 'styled-components';
import React, { memo } from 'react';
import { containerSize } from '../../theme/variables/sizes';
import { withIgnoreBoundary } from '../../errors/ignore/ignore';
import { compose } from 'ramda';

export const FooterContainer = styled.footer`
	display: grid;
	grid-template-columns: ${containerSize};
	justify-content: center;
`;

export const FooterInnerContainer = styled.div`
	display: grid;
	justify-content: center;
`;

export const Footer = compose(
	withIgnoreBoundary,
	memo,
)(() => (
	<FooterContainer>
		<FooterInnerContainer>&copy; Karl Merkli</FooterInnerContainer>
	</FooterContainer>
));

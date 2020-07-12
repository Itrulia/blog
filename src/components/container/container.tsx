import styled, { css } from 'styled-components';
import { containerSize, smallContainerSize } from '../../theme/variables/sizes';

export const containerStyles = css`
	width: 100%;
	max-width: ${containerSize};
	margin-left: auto;
	margin-right: auto;
`;

export const Container = styled.div`
	${containerStyles}
`;

export const smallContainerStyles = css`
	${containerStyles}
	max-width: ${smallContainerSize};
`;

export const SmallContainer = styled.div`
	${smallContainerStyles}
`;

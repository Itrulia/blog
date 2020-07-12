import { memo } from 'react';
import styled from 'styled-components';
import { SmallContainer } from '../container/container';

export const HeaderContainer = styled.header`
	display: grid;
	align-items: center;
	text-align: center;
`;

export const Header = memo(({ children }) => (
	<HeaderContainer>
		<SmallContainer>{children}</SmallContainer>
	</HeaderContainer>
));

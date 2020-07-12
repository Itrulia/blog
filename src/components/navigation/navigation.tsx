import Link from 'next/link';
import { compose } from 'ramda';
import { memo, ReactChild } from 'react';
import styled from 'styled-components';
import { withIgnoreBoundary } from '../../errors/ignore/ignore';
import { themeMode } from '../../theme/mode';
import { padding } from '../../theme/variables/sizes';
import { containerStyles } from '../container/container';

export const navigationForegroundColor = themeMode({
	light: ({ theme }) => `hsl(${theme.colors.primaryHue}, 0%, 100%)`,
});

export const NavigationContainer = styled.header`
	padding: ${padding};
`;

export const NavigationInnerContainer = styled.nav`
	${containerStyles}
	display: flex;
	flex-flow: row wrap;
`;

export const NavigationLink = styled.a`
	// color: ${navigationForegroundColor};
	padding: ${padding};
	text-decoration: none;
`;

export const NavLink = memo<{ href: string; children: ReactChild }>(
	({ href, children }) => (
		<Link href={href} passHref>
			<NavigationLink>{children}</NavigationLink>
		</Link>
	),
);

export const Navigation = compose(
	withIgnoreBoundary,
	memo,
)(() => (
	<NavigationContainer>
		<NavigationInnerContainer>
			<NavLink href="/">Recipes</NavLink>
			<NavLink href="/about">About</NavLink>
		</NavigationInnerContainer>
	</NavigationContainer>
));

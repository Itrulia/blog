import React, { memo, Component, ComponentType } from 'react';

export type IgnoreState = {
	hasError: boolean;
};

class Ignore extends Component<unknown, IgnoreState> {
	public state = { hasError: false };

	public static getDerivedStateFromError() {
		return { hasError: true };
	}

	public render() {
		if (this.state.hasError) {
			return <></>;
		}

		return this.props.children;
	}
}

export const withIgnoreBoundary = <P extends object>(Cmp: ComponentType<P>) =>
	memo<P>(props => (
		<Ignore>
			<Cmp {...props} />
		</Ignore>
	));

import React, { memo } from 'react';
import { Normalize } from 'styled-normalize';
import { Body } from './body';
import { Typography } from './typography';

export const Styles = memo(() => (
	<>
		<Normalize />
		<Typography />
		<Body />
	</>
));

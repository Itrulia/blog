import React, { memo } from 'react';
import { withIgnoreBoundary } from '../../errors/ignore/ignore';
import { compose } from 'ramda';

export const Ingredients = compose(
	withIgnoreBoundary,
	memo,
)(() => {
	return <></>;
});

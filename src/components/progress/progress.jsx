import React from 'react';
import PropTypes from 'prop-types';
import { PROGRESS_TYPE } from './constants';
import { ProgressLinear, ProgressCircular } from './components';

export const Progress = ({
	percent = 0,
	title = '',
	color = '#000',
	width = '100%',
	type = PROGRESS_TYPE.LINE,
}) => {
	const progressStyle = {
		display: 'flex',
		flexDirection: 'column',
		width: width ? width : '100%',
	};

	return (
		<div style={progressStyle}>
			{type === PROGRESS_TYPE.LINE && <ProgressLinear percent={percent} title={title} color={color} />}
			{type === PROGRESS_TYPE.CIRCLE && (
				<ProgressCircular percent={percent} title={title} color={color} />
			)}
		</div>
	);
};

Progress.propTypes = {
	percent: PropTypes.number,
	title: PropTypes.string,
	color: PropTypes.string,
	width: PropTypes.string,
	type: PropTypes.oneOf(Object.values(PROGRESS_TYPE)),
};

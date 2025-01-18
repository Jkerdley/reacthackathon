import { React } from 'react';
import PropTypes from 'prop-types';
import { BADGE_TYPE } from './constants/badge-type';
import { getBadgeTypeStyles } from './utils';

export const Badge = ({ content = '', type = BADGE_TYPE.INFO }) => {
	console.log(content);
	return (
		<div
			style={{
				display: 'inline-block',
				textAlign: 'center',
				verticalAlign: 'middle',
				border: '1px solid transparent',
				padding: '0.25rem 0.75rem',
				fontSize: '1rem',
				borderRadius: '0.25rem',
				...getBadgeTypeStyles(type),
			}}
		>
			{content}
		</div>
	);
};

Badge.propTypes = {
	content: PropTypes.string.isRequired,
	color: PropTypes.string,
	type: PropTypes.oneOf(Object.values(BADGE_TYPE)),
};

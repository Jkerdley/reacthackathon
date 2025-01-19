import { React } from 'react';
import PropTypes from 'prop-types';
import { BADGE_TYPE } from './constants/badgeType';
import { getBadgeTypeStyles } from './utils';

export const Badge = ({ content = '', type = BADGE_TYPE.INFO }) => {
	return (
		<div
			style={{
				display: 'inline-block',
				textAlign: 'center',
				verticalAlign: 'middle',
				border: '1px solid transparent',
				padding: '0.15rem 0.65rem',
				fontSize: '0.8rem',
				fontWeight: '500',
				borderRadius: '0.2rem',
				// backgroundColor: '#be1717',
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

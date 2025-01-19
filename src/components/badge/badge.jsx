import { React } from 'react';
import PropTypes from 'prop-types';
import { BADGE_TYPE } from './constants/badgeType';
import { getBadgeTypeStyles } from './utils';

export const Badge = ({ content, type = BADGE_TYPE.INFO, color, backgroundColor }) => {
	const badgeStyles = getBadgeTypeStyles(type);

	if (color) {
		badgeStyles.color = color;
	}
	if (backgroundColor) {
		badgeStyles.backgroundColor = backgroundColor;
		badgeStyles.borderColor = backgroundColor;
	}

	return (
		<div
			className={`inline-block text-center align-middle border py-1 px-2 text-sm font-medium rounded`}
			style={badgeStyles}
		>
			{content}
		</div>
	);
};

Badge.propTypes = {
	content: PropTypes.string.isRequired,
	type: PropTypes.oneOf(Object.values(BADGE_TYPE)),
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
};

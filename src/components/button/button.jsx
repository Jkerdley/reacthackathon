import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { hexToRgb } from '../../utils';
import { BUTTON_CORNER_TYPE } from './constants';

export const Button = ({
	title = '',
	color = '#000',
	backgroundColor = '#fff',
	isBackgroundTransparent = false,
	cornerType = BUTTON_CORNER_TYPE.SQUARE,
	height,
	width,
	onClick,
	...props
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const buttonStyle = {
		fontWeight: '700',
		padding: '0.25rem 1rem',
		color,
		backgroundColor,
	};

	if (height) {
		buttonStyle.height = height;
	}

	if (width) {
		buttonStyle.width = width;
	}

	if (cornerType === BUTTON_CORNER_TYPE.ROUNDED) {
		buttonStyle.borderRadius = '0.75rem';
	}

	if (isHovered && !isBackgroundTransparent) {
		buttonStyle.backgroundColor = hexToRgb(backgroundColor, 0.8);
	} else if (!isHovered && isBackgroundTransparent) {
		buttonStyle.color = hexToRgb(backgroundColor, 0.8);
		buttonStyle.backgroundColor = 'transparent';
		buttonStyle.border = `1px solid ${backgroundColor}`;
	} else if (isHovered && isBackgroundTransparent) {
		buttonStyle.color = '#fff';
		buttonStyle.backgroundColor = backgroundColor;
		buttonStyle.border = `1px solid transparent`;
	}

	return (
		<button
			style={buttonStyle}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			{title}
		</button>
	);
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	isBackgroundTransparent: PropTypes.bool,
	cornerType: PropTypes.oneOf(Object.values(BUTTON_CORNER_TYPE)),
	height: PropTypes.string,
	width: PropTypes.string,
	onClick: PropTypes.func,
};

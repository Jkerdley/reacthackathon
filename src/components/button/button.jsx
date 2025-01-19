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
	height = '',
	width = '',
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
		color,
		backgroundColor,
	};

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

	const arbitraryHeight = height !== '' ? `h-[${height}px]` : '';
	const arbitraryWidth = width !== '' ? `w-[${width}px]` : '';
	const rounded = cornerType === BUTTON_CORNER_TYPE.ROUNDED ? 'rounded-xl' : 'rounded-none';

	return (
		<button
			className={`${arbitraryHeight} ${arbitraryWidth} ${rounded} font-bold py-1 px-4 disabled:opacity-50 transition-all ease-in-out`}
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

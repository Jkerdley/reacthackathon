import { React } from 'react';
import PropTypes from 'prop-types';

export const Input = ({ width = '100%', height = '32px', ...props }) => {
	return (
		<input
			style={{
				width,
				height,
				background: '#14141B',
				padding: '8px',
				border: `1px solid #83A0EBB2`,
				borderRadius: '10px',
			}}
			{...props}
		/>
	);
};

Input.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
};

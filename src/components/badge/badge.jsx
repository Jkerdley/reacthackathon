import { React } from 'react';
import PropTypes from 'prop-types';

export const Badge = ({ content = '', color = '#000' }) => {
	return <div style={{ color: color }}>{content}</div>;
};

Badge.propTypes = {
	content: PropTypes.string.isRequired,
	color: PropTypes.string,
};

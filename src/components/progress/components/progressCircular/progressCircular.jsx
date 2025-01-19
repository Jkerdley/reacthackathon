import React from 'react';
import PropTypes from 'prop-types';

export const ProgressCircular = ({ percent, title, color }) => {
	const circleStyle = {
		cx: '18',
		cy: '18',
		r: '16',
		fill: 'none',
		strokeWidth: '2',
	};

	return (
		<div className="relative w-auto h-auto">
			<svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
				<circle {...circleStyle} className="stroke-current text-gray-200"></circle>
				<circle
					{...circleStyle}
					style={{ color }}
					strokeDasharray="100"
					strokeDashoffset={100 - percent}
					strokeLinecap="round"
					className="stroke-current"
				></circle>
			</svg>
			<div className="flex flex-col absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
				<span className="text-center">{title}</span>
				<span className="text-center">{percent}%</span>
			</div>
		</div>
	);
};

ProgressCircular.propTypes = {
	percent: PropTypes.number,
	title: PropTypes.string,
	color: PropTypes.string,
};

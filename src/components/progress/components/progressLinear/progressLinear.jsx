import React from 'react';
import PropTypes from 'prop-types';

export const ProgressLinear = ({ percent, title, color }) => {
	return (
		<div className="flex flex-col gap-1">
			<div className="h-6 font-semibold rounded-lg w-full bg-gray-200">
				<div
					className="flex justify-between h-6 font-semibold rounded-lg px-2"
					style={{
						width: percent + '%',
						backgroundColor: color,
					}}
				>
					<span>{title}</span>
					<span>{percent}%</span>
				</div>
			</div>
		</div>
	);
};

ProgressLinear.propTypes = {
	percent: PropTypes.number,
	title: PropTypes.string,
	color: PropTypes.string,
};

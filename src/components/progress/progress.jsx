import React from 'react';
import PropTypes from 'prop-types';
import { PROGRESS_TYPE } from './constants';

export const Progress = ({ percent = 0, title = '', color = '#000', type = PROGRESS_TYPE.LINE }) => {
	return (
		<div className="flex flex-col">
			{title !== '' && <span>{title}</span>}

			{type === PROGRESS_TYPE.LINE && (
				<div className="flex flex-col gap-1">
					<div className="w-full bg-gray-200 rounded h-6">
						<div className="h-6 rounded" style={{ width: percent + '%', backgroundColor: color }}>
							{percent}%
						</div>
					</div>
				</div>
			)}
			{type === PROGRESS_TYPE.CIRCLE && (
				<>
					<div className="relative size-auto">
						<svg
							className="size-full -rotate-90"
							viewBox="0 0 36 36"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18"
								cy="18"
								r="16"
								fill="none"
								className="stroke-current text-gray-200"
								strokeWidth="2"
							></circle>
							<circle
								cx="18"
								cy="18"
								r="16"
								fill="none"
								className="stroke-current"
								strokeWidth="2"
								strokeDasharray="100"
								strokeDashoffset={100 - percent}
								strokeLinecap="round"
								style={{ color: color }}
							></circle>
						</svg>
						<div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
							{percent}%
						</div>
					</div>
				</>
			)}
		</div>
	);
};

Progress.propTypes = {
	percent: PropTypes.number,
	title: PropTypes.string,
	color: PropTypes.string,
	type: PropTypes.oneOf(Object.values(PROGRESS_TYPE)),
};

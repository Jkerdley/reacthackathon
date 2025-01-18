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
		<div
			style={{
				position: 'relative',
				width: 'auto',
				height: 'auto',
			}}
		>
			<svg
				style={{
					width: '100%',
					height: '100%',
					'--tw-rotate': '-90deg',
					transform:
						'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
				}}
				viewBox="0 0 36 36"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					{...circleStyle}
					style={{
						stroke: 'currentColor',
						backgroundColor: '#e5e7eb',
					}}
				></circle>
				<circle
					{...circleStyle}
					style={{ stroke: 'currentColor', color: color }}
					className="stroke-current"
					strokeDasharray="100"
					strokeDashoffset={100 - percent}
					strokeLinecap="round"
				></circle>
			</svg>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<span>{title}</span>
				<span>{percent}%</span>
			</div>
		</div>
	);
};

ProgressCircular.propTypes = {
	percent: PropTypes.number,
	title: PropTypes.string,
	color: PropTypes.string,
};

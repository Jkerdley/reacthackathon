import React from 'react';
import PropTypes from 'prop-types';

export const ProgressLinear = ({ percent, title, color }) => {
	const lineStyle = {
		height: '1.5rem',
		fontWeight: '600',
		borderRadius: '0.45rem',
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
			<div
				style={{
					...lineStyle,
					width: '100%',
					backgroundColor: '#e5e7eb',
				}}
			>
				<div
					style={{
						...lineStyle,
						display: 'flex',
						justifyContent: 'space-between',
						paddingLeft: '0.5rem',
						paddingRight: '0.5rem',
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

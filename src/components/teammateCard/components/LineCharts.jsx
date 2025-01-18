import React from 'react';
import { Progress } from '../../progress';

export const LineCharts = () => {
	return (
		<div name="line-charts-container" className="w-auto h-auto">
			<Progress percent={75} title="HTML" color="#006eb8" type="line" />
			<Progress percent={75} title="CSS" color="green" type="line" />
			<Progress percent={75} title="Frontend" color="green" type="line" />
			<Progress percent={75} title="Frontend" color="green" type="line" />
		</div>
	);
};

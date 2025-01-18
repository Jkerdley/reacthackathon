import React from 'react';
import { Progress } from '../../progress';

export const LineCharts = () => {
	return (
		<div name="line-charts-container" className="flex flex-col w-auto h-auto gap-4">
			<Progress percent={44} title="HTML" color="#d124c3" type="line" />
			<Progress percent={75} title="CSS" color="green" type="line" />
			<Progress percent={75} title="Frontend" color="green" type="line" />
			<Progress percent={75} title="Frontend" color="green" type="line" />
		</div>
	);
};

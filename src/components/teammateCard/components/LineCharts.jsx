import React from 'react';
import { Progress } from '../../progress';
import { getUserById } from '../../../utils/userUtils.js';

export const LineCharts = ({ teammate, isBigCard }) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	const skillsToDisplay = isBigCard ? user.skills : user.skills.slice(0, 4);

	return (
		<div name="line-charts-container" className="flex flex-col w-auto h-auto gap-4">
			{skillsToDisplay.map((skill) => {
				if (skill.type === 'line') {
					return (
						<Progress
							key={skill.name}
							percent={skill.level}
							title={skill.name}
							color={skill.color}
							type="line"
						/>
					);
				}
				return null;
			})}
		</div>
	);
};

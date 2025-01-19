import React from 'react';
import { Progress } from '../../progress/index.js';
import { getUserById } from '../../../utils/userUtils.js';
import PropTypes from 'prop-types';

export const CircleCharts = ({ teammate, isBigCard }) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	const skillsToDisplay = isBigCard ? user.skills : user.skills.slice(0, 4);

	return (
		<div name="line-charts-container" className="flex w-auto h-auto gap-4">
			{skillsToDisplay.map((skill) => {
				if (skill.type === 'circle') {
					return (
						<Progress
							key={skill.name}
							percent={skill.level}
							title={skill.name}
							color={skill.color}
							type="circle"
							width="180px"
						/>
					);
				}
				return null;
			})}
		</div>
	);
};

CircleCharts.propTypes = {
	teammate: PropTypes.string,
	isBigCard: PropTypes.bool,
};

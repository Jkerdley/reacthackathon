import React from 'react';
import { NameAndYears } from './NameAndYears';
import { TeamMateIcon } from '../../sidebar';
import { getUserById } from '../../../utils/userUtils';
import PropTypes from 'prop-types';

export const InfoAndAvatar = ({ teammate, isBigCard }) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	return (
		<div className="flex overflow-hidden whitespace-nowrap justify-between">
			<NameAndYears
				name={user.name}
				years={user.years}
				profession={user.profession}
				level={user.level}
				text={user.text}
				makeInProject={user.makeInProject}
				isBigCard={isBigCard}
				teammate={teammate}
			/>
			<div
				name="avatar-in-card"
				className={`${isBigCard ? 'flex items-end overflow-hidden' : 'overflow-hidden'}`}
			>
				<TeamMateIcon
					teammate={teammate}
					size="size-64"
					rounded="rounded-2xl"
					isBigCard={isBigCard}
				/>
			</div>
		</div>
	);
};

InfoAndAvatar.propTypes = {
	teammate: PropTypes.string,
	isBigCard: PropTypes.bool,
};

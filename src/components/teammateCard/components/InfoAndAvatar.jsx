import React from 'react';
import { NameAndYears } from './NameAndYears';
import { TeamMateIcon } from '../../sidebar';
import { getUserById } from '../../../utils/userUtils';

export const InfoAndAvatar = ({ teammate }) => {
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
			/>
			<div name="avatar-in-card" className="overflow-hidden">
				<TeamMateIcon teammate={teammate} size="size-64" rounded="rounded-2xl" />
			</div>
		</div>
	);
};

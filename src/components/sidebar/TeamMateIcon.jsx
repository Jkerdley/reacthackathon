import React from 'react';
import AvatarJo from '../../assets/images/avatarjo.jpg';
import { getUserById } from '../../utils/userUtils';

export const TeamMateIcon = ({ size = 'size-16', rounded = 'rounded-full', teammate }) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}
	return (
		<div className={`relative ${size} justify-center items-center ${rounded} overflow-hidden`}>
			<img className="w-full h-full object-cover" src={user.avatar} alt="avatar" />
		</div>
	);
};

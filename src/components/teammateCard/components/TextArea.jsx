import React from 'react';
import { getUserById } from '../../../utils/userUtils';

export const TextArea = ({ teammate, isBigCard }) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	const isBigCardOpened = isBigCard ? 'max-h-20' : 'max-h-12';
	return (
		<div name="text-area" className={`flex justify-between overflow-hidden ${isBigCardOpened}`}>
			<p className="flex flex-wrap object-cover">{user.text}</p>
		</div>
	);
};

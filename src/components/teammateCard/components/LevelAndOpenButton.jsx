import React from 'react';
import { Button } from '../../button';
import { getUserById } from '../../../utils/userUtils';
import { BUTTON_CORNER_TYPE } from '../../button/constants';

export const LevelAndOpenButton = ({ teammate }) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	return (
		<div name="lvl-and-button" className="flex justify-between max-h-20 items-center overflow-hidden">
			<div className="flex w-[40%] font-semibold object-cover">{user.level} LVL</div>
			<Button
				title="Открыть"
				cornerType={BUTTON_CORNER_TYPE.ROUNDED}
				isBackgroundTransparent={true}
				height={38}
				width={140}
				color="#83A0EB"
				onClick={() => onClick()}
			/>
		</div>
	);
};

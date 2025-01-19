// import React from 'react';
// import { Button } from '../../button';
// import { getUserById } from '../../../utils/userUtils';
// import { BUTTON_CORNER_TYPE } from '../../button/constants';

// export const LevelAndOpenButton = ({ teammate, isBigCard }) => {
// 	const user = getUserById(teammate);

// 	if (!user) {
// 		return <div>Пользователь не найден</div>;
// 	}

// 	return (
// 		<div
// 			name="lvl-and-button"
// 			className={`flex ${isBigCard ? 'justify-end' : 'justify-between'}  max-h-20 items-center overflow-hidden`}
// 		>
// 			{isBigCard ? '' : <div className="flex w-[40%] font-semibold object-cover">{user.level} LVL</div>}
// 			<Button
// 				title={isBigCard ? 'Следующий' : 'Открыть'}
// 				cornerType={BUTTON_CORNER_TYPE.ROUNDED}
// 				isBackgroundTransparent={true}
// 				height={38}
// 				width={140}
// 				color="#83A0EB"
// 				onClick={() => onClick(Link to/user.id + 1)}
// 			/>
// 		</div>
// 	);
// };
import React from 'react';
import { Button } from '../../button';
import { getUserById } from '../../../utils/userUtils';
import { BUTTON_CORNER_TYPE } from '../../button/constants';
import { useNavigate } from 'react-router-dom';

export const LevelAndOpenButton = ({ teammate, isBigCard }) => {
	const user = getUserById(teammate);
	const navigate = useNavigate();

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	const handleButtonClick = () => {
		if (isBigCard) {
			const nextUserId = Number(user.id) < 3 ? Number(user.id) + 1 : 1;
			navigate(`/reacthackathon/teammate/${nextUserId}`);
		} else {
			navigate(`/reacthackathon/teammate/${user.id}`);
		}
	};

	return (
		<div
			name="lvl-and-button"
			className={`flex ${isBigCard ? 'justify-end' : 'justify-between'} max-h-20 items-center overflow-hidden`}
		>
			{!isBigCard && <div className="flex w-[40%] font-semibold object-cover">{user.level} LVL</div>}
			<Button
				title={isBigCard ? 'Следующий' : 'Открыть'}
				cornerType={BUTTON_CORNER_TYPE.ROUNDED}
				isBackgroundTransparent={true}
				height={38}
				width={140}
				color="#83A0EB"
				onClick={handleButtonClick}
			/>
		</div>
	);
};

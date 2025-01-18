import React from 'react';
import { SocialButtons } from './components/SocialButtons';
import { LineCharts } from './components/LineCharts';
import { BadjesAndFavourite } from './components/BadjesAndFavourite';
import { InfoAndAvatar } from './components/InfoAndAvatar';
import { Button } from '../button';
import { BUTTON_CORNER_TYPE } from '../button/constants';

export const TeammateCard = ({ flex, onHover, onMouseLeave, teammateId, onClick }) => {
	return (
		<div
			name="card-container"
			className={`flex flex-col gap-6 bg-black ${flex} h-full rounded-xl p-4 transition-all ease-out overflow-hidden`}
		>
			<BadjesAndFavourite />
			<div
				name="hidden-overflow-card-container"
				className="flex flex-col w-full h-full object-cover gap-6 overflow-hidden"
			>
				<InfoAndAvatar />
				<SocialButtons teammate={teammateId} />
				<LineCharts />
				<div name="text-area" className="flex justify-between overflow-hidden h-20 bg-green-500">
					<p className="flex flex-wrap object-cover">
						Тут текст про разработчика Тут текст про разработчика Тут текст про разработчика Тут
						текст про разработчика Тут текст про разработчика Тут текст про разработчика Тут текст
						про разработчика...
					</p>
				</div>
				<div name="lvl-and-button" className="flex justify-between overflow-hidden">
					{/* <div className="flex w-[40%] truncate object-cover">DEV LEVEL: 88 lvl</div> */}
					<Button
						title="Открыть"
						cornerType={BUTTON_CORNER_TYPE.ROUNDED}
						isBackgroundTransparent={true}
						height={40}
						width={140}
						color="#83A0EB"
						onClick={() => onClick()}
					/>
				</div>
			</div>
		</div>
	);
};

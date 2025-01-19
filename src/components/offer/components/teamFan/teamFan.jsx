import { React } from 'react';
import { TeamMateIcon } from '../../../sidebar';

export const TeamFan = () => {
	return (
		<div className="relative w-full h-full mb-4">
			<div className="absolute top-1/2 left-1/2 transform -translate-x-[190px] -translate-y-[90px]">
				<TeamMateIcon
					teammate="1"
					size="size-44"
					height="h-56"
					rotate="-rotate-12"
					rounded="rounded-2xl"
				/>
			</div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-[80px] -translate-y-[100px]">
				<TeamMateIcon
					teammate="2"
					size="size-44"
					height="h-56"
					rotate="rotate-5"
					rounded="rounded-2xl"
				/>
			</div>
			<div className="absolute top-1/2 left-1/2 transform translate-x-[25px] -translate-y-[80px]">
				<TeamMateIcon
					teammate="3"
					size="size-44"
					height="h-56"
					rotate="rotate-12"
					rounded="rounded-2xl"
				/>
			</div>
		</div>
	);
};

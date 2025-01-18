import React from 'react';
import { FavouritesIcon } from '../icons/FavouritesIcon';
import { TeamMateIcon } from '../sidebar/TeamMateIcon';
import { NameAndYears } from './components/NameAndYears';
import { SocialButtons } from './components/SocialButtons';
import { LineCharts } from './components/LineCharts';
import { BadjesAndFavourite } from './components/BadjesAndFavourite';

export const TeammateCard = ({ flex, onHover, onMouseLeave, teammateId, onClick }) => {
	return (
		<div
			name="card-container"
			className={`flex flex-col gap-6 bg-black ${flex} h-full rounded-xl p-4 transition-all ease-out overflow-hidden`}
			onMouseEnter={onHover}
			onMouseLeave={onMouseLeave}
		>
			<BadjesAndFavourite />
			<div
				name="hidden-overflow-card-container"
				className="flex flex-col w-full h-full object-cover gap-6 overflow-hidden"
			>
				<div className="flex overflow-hidden whitespace-nowrap bg-slate-500 justify-between">
					<NameAndYears />
					<div name="avatar-in-card" className="overflow-hidden">
						<TeamMateIcon size="size-64" rounded="rounded-2xl" />
					</div>
				</div>
				<SocialButtons teammate={teammateId} />
				<LineCharts />
			</div>
		</div>
	);
};

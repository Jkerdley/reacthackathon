import React from 'react';
import { BadjesAndFavourite } from './BadjesAndFavourite';
import { InfoAndAvatar } from './InfoAndAvatar';
import { SocialButtons } from './SocialButtons';
import { LineCharts } from './LineCharts';
import { TextArea } from './TextArea';
import { LevelAndOpenButton } from './LevelAndOpenButton';

export const BigCard = ({ teammateId, flex }) => {
	return (
		<div
			name="card-container"
			className={`flex flex-col gap-6 border border-[#546797]/40 bg-[#181D29] ${flex} h-full rounded-xl p-4 transition-all ease-out overflow-hidden`}
		>
			<BadjesAndFavourite teammate={teammateId} />
			<div
				name="hidden-overflow-card-container"
				className="flex flex-col w-full h-full object-cover gap-6 overflow-hidden"
			>
				<InfoAndAvatar teammate={teammateId} />
				<SocialButtons teammate={teammateId} />
				<div></div>
				<LineCharts teammate={teammateId} isBigCard={true} />
				<TextArea teammate={teammateId} />
				<LevelAndOpenButton teammate={teammateId} />
			</div>
		</div>
	);
};

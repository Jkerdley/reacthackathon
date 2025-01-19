import React from 'react';
import { BadjesAndFavourite } from './BadjesAndFavourite';
import { InfoAndAvatar } from './InfoAndAvatar';
import { SocialButtons } from './SocialButtons';
import { LineCharts } from './LineCharts';
import { TextArea } from './TextArea';
import { LevelAndOpenButton } from './LevelAndOpenButton';
import { CircleCharts } from './CircleCharts';
import PropTypes from 'prop-types';

export const BigCard = ({ teammateId, flex, isBigCard }) => {
	return (
		<div
			name="card-container"
			className={`flex flex-col gap-2 border border-[#546797]/40 bg-[#181D29] ${flex} h-full rounded-xl p-4 transition-all ease-out overflow-hidden`}
		>
			<BadjesAndFavourite teammate={teammateId} />
			<div
				name="hidden-overflow-card-container"
				className="flex flex-col justify-between w-full h-full object-cover gap-5 overflow-hidden"
			>
				<InfoAndAvatar teammate={teammateId} isBigCard={isBigCard} />
				<SocialButtons teammate={teammateId} />
				<div className="flex justify-between items-center gap-10">
					<div className="flex flex-col w-full justify-between">
						<LineCharts teammate={teammateId} isBigCard={isBigCard} />
					</div>
					<CircleCharts teammate={teammateId} isBigCard={isBigCard} />
				</div>
				<TextArea teammate={teammateId} isBigCard={isBigCard} />
				<LevelAndOpenButton teammate={teammateId} isBigCard={isBigCard} />
			</div>
		</div>
	);
};

BigCard.propTypes = {
	flex: PropTypes.string,
	teammateId: PropTypes.string,
	isBigCard: PropTypes.bool,
};

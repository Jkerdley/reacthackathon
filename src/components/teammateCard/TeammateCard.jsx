import React from 'react';
import { Progress } from '../../components/progress/';
import { FavouritesIcon } from '../icons/FavouritesIcon';
import TeamMateIcon from '../sidebar/TeamMateIcon';
import NameAndYears from './components/NameAndYears';

export const TeammateCard = ({ flex, onHover, onMouseLeave }) => {
	return (
		<div
			name="card-container"
			className={`flex flex-col gap-6 bg-black ${flex} h-full rounded-xl p-4 transition-all ease-out overflow-hidden`}
			onMouseEnter={onHover}
			onMouseLeave={onMouseLeave}
		>
			<div
				name="badje and like container"
				className="flex rounded-xl h-10 items-center justify-between overflow-hidden"
			>
				BADJES <FavouritesIcon size={'size-6'} />
			</div>
			<div
				name="hidden-overflow-card-container"
				className="bg-white flex flex-col w-full h-full object-cover gap-6 overflow-hidden"
			>
				<div className="flex overflow-hidden whitespace-nowrap bg-slate-500 justify-between pr-2">
					<NameAndYears />
					<div className="overflow-hidden">
						<TeamMateIcon size={'size-60'} />
					</div>
				</div>
				<div className="w-[400px] h-[100px] bg-red-600 object-cover">
					<Progress percent={75} title={'Frontend'} color="green" type="line" />
					main
				</div>
			</div>
		</div>
	);
};

// import React from 'react';
// import { Progress } from '../../components/progress/';
// export const TeammateCard = ({ flex }) => {
// 	return (
// 		<div name="card-container" className={`flex bg-black ${flex} h-full rounded-xl p-4 overflow-hidden`}>
// 			<div name="hidden-overflow-container" className="w-full h-full object-cover">
// 				<div className="w-[200px] h-[100px] bg-red-600">
// 					<Progress percent={75} title={'Frontend'} color="green" type="line" />
// 					<Progress percent={75} title={'Frontend'} color="green" type="circle" />
// 					main
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

import React from 'react';
import { Progress } from '../../components/progress/';
import { FavouritesIcon } from '../icons/FavouritesIcon';

export const TeammateCard = ({ flex, onHover, onMouseLeave }) => {
	return (
		<div
			name="card-container"
			className={`flex flex-col gap-6 bg-black ${flex} h-full rounded-xl p-4 overflow-hidden transition-all ease-out`}
			onMouseEnter={onHover}
			onMouseLeave={onMouseLeave}
		>
			<div
				name="badje and like container"
				className="flex rounded-xl h-10 items-center justify-between"
			>
				BADJES <FavouritesIcon size={'size-6'} />
			</div>
			<div
				name="hidden-overflow-card-container"
				className=" flex flex-col w-full h-full object-cover gap-3"
			>
				<div className="flex bg-slate-700 rounded-xl h-10 ">NAMES</div>
				<div className="w-[400px] h-[100px] bg-red-600 object-cover">
					<Progress percent={75} title={'Frontend'} color="green" type="line" />
					main
				</div>
			</div>
		</div>
	);
};

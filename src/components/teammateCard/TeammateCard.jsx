import React from 'react';
import { Progress } from '../../components/progress/';
export const TeammateCard = () => {
	return (
		<div className="flex bg-black w-full h-full rounded-xl p-4">
			<div className="w-[200px] h-[100px]">
				<Progress percent={75} title={'Frontend'} color="green" type="line" />
				main
			</div>
		</div>
	);
};

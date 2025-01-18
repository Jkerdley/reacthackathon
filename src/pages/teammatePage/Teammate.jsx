import React from 'react';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';
import { Progress } from '../../components/progress';

const Teammate = () => {
	return (
		<>
			<div className="flex bg-black w-full h-full rounded-xl p-4">
				<div className="w-[200px] h-[100px]">
					<Progress percent={75} title={'Frontend'} color="green" type="line" />
					<Progress percent={35} title={'Backend'} color="blue" type="circle" />
					main
				</div>
			</div>
		</>
	);
};

export default Teammate;

import React from 'react';
import { PageContainer } from '../../components/pageContainer';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';

export const MainPage = () => {
	return (
		<>
			<PageContainer>
				<div className="flex flex-[7]"></div>
				<>
					<TeammateCard teammateId="1" flex={'flex-[3] transition-all ease-out'} />
					<TeammateCard teammateId="2" flex={'flex-[3] transition-all ease-out'} />
					<TeammateCard teammateId="3" flex={'flex-[3] transition-all ease-out'} />
				</>
			</PageContainer>
		</>
	);
};
